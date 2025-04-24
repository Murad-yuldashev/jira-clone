<script setup lang="ts">
definePageMeta({ layout: 'auth' });

const isLogin = ref(true);
const toggleLogin = () => {
  isLogin.value = !isLogin.value;
};
</script>

<template>
  <section class="w-full h-screen flex justify-center items-center relative">
    <NuxtImg src="/bg-auth.jpg" class="absolute inset-0 w-full h-full object-cover z-10" />
    <div class="absolute inset-0 w-full h-full z-20 bg-white/40 dark:bg-black/40" />

    <UCard class="z-50 w-1/2 relative" :ui="{body: {base: 'flex gap-4'}}">
      <div class="space-y-4 flex-1">
        <h1 class="text-2xl font-bold">
          <template v-if="isLogin">Login</template>
          <template v-else>Register</template>
        </h1>

        <p class="opacity-50">
          <template v-if="isLogin">Please use the following credentials to login</template>
          <template v-else>Please use the following credentials to register</template>
        </p>

        <AuthLogin v-if="isLogin" :toggle-login="toggleLogin" />
        <AuthRegister v-else :toggle-login="toggleLogin" />
      </div>
      <UDivider label="OR" orientation="vertical" class="w-hit" />
      <div class="space-y-4 flex-1 flex flex-col justify-center items-center">
        <UButton color="black" block size="lg">
          <Icon name="mdi:github" class="size-5" />
          <span>Login with Github</span>
        </UButton>

        <UButton color="black" block size="lg">
          <Icon name="mdi:google" class="size-5" />
          <span>Login with Google</span>
        </UButton>
      </div>
    </UCard>

  </section>
</template>
