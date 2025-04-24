<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

interface FormState {
  email: string | undefined;
  password: string | undefined;
}
interface Props {
  toggleLogin: () => void;
}
defineProps<Props>()

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
  console.log(event.data)
}
</script>

<template>
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

    <UButton type="submit" color="blue" block size="lg">
      Submit
    </UButton>
  </UForm>
</template>
