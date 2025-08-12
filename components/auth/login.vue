<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import {ACCOUNT} from "~/libs/appwrite";
import {useAuthStore} from "~/store/auth.store";

interface FormState {
  email: string | undefined;
  password: string | undefined;
}
interface Props {
  toggleLogin: () => void;
}
defineProps<Props>()

const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();
const isLoading = ref<boolean>(false);
const error = ref<string | null>('');

const state = reactive<FormState>({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError<string>[] => {
  const errors: FormError<string>[] = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  isLoading.value = true;
  const { email, password } = event.data;

  try {
    ACCOUNT.createEmailPasswordSession(email, password);
    const response = await ACCOUNT.get();

    authStore.set({
      id: response.$id,
      name: response.name,
      email: response.email,
      status: response.status,
    });

    await router.push('/');

    toast.add({
      title: 'Login Successful',
      description: 'You are now logged in',
    });
  } catch(e: any) {
    error.value = e.message;
    isLoading.value = false;
  }
}
</script>

<template>
  <UAlert
      v-if="error"
      color="red"
      title="Error"
      :description="error"
      variant="outline"
      icon="i-lucide-terminal"
  />

  <UForm
      :validate="validate"
      :state="state"
      class="!space-y-4"
      @submit="onSubmit"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg" />
    </UFormGroup>

    <div class="text-sm text-neutral-500">
      Not Registered yet?
      <span class="text-blue-500 hover:underline" role="button" @click="toggleLogin" >Sign up</span>
    </div>

    <UButton type="submit" color="blue" block size="lg" :disabled="isLoading">
      <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" class="!size-5" />
      <template v-else>Log in</template>
    </UButton>
  </UForm>
</template>
