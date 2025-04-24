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
defineProps<Props>()

const state = reactive<FormState>({
  name: undefined,
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError<string>[] => {
  const errors: FormError<string>[] = []
  if (!state.name) errors.push({ path: 'name', message: 'Name is Required' })
  if (!state.email) errors.push({ path: 'email', message: 'Email is Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  const { name, email, password } = event.data;

  try {
    const response = await ACCOUNT.create(UNIQUE_ID, email, password, name);
    console.log(response);
  } catch(error) {
    console.log(error)
  }
}
</script>

<template>
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

    <UButton type="submit" color="blue" block size="lg">
      Submit
    </UButton>
  </UForm>
</template>
