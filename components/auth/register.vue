<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import {ACCOUNT, UNIQUE_ID} from "~/libs/appwrite";

interface FormState {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}
interface Props {
  toggleLogin: () => void;
  }
const props = defineProps<Props>();
const toast = useToast();
const isLoading = ref<boolean>(false);
const error = ref<string | null>('');

const state = reactive<FormState>({
  name: undefined,
  email: undefined,
  password: undefined,
})

const validate = (state: any): FormError<string>[] => {
  const errors: FormError<string>[] = []
  if (!state.name) errors.push({ path: 'name', message: 'Name is Required' })
  if (!state.email) errors.push({ path: 'email', message: 'Email is Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  isLoading.value = true;
  const { name, email, password } = event.data;

  try {
    await ACCOUNT.create(UNIQUE_ID, email, password, name);
    props.toggleLogin();
    toast.add({
      title: 'Account Created',
      description: 'You can now login with your new account',
    });

    isLoading.value = false;
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
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg" />
    </UFormGroup>

    <div class="text-sm text-neutral-500">
      Already have an account?
      <span class="text-blue-500 hover:underline" role="button" @click="toggleLogin" >Sign in</span>
    </div>

    <UButton type="submit" color="blue" block size="lg" :disabled="isLoading">
      <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" class="!size-5" />
      <template v-else>Submit</template>
    </UButton>
  </UForm>
</template>
