<template>
  <header class="h-[10vh] fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-900">
    <nav class="container mx-auto flex items-center justify-between h-full">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <NuxtImg src="/logo.svg" alt="logo" width="50" height="50" />
        <span class="text-2xl font-medium">Jira software</span>
      </NuxtLink>

      <div class="flex items-center space-x-2">
        <SharedColorMode />
        <NuxtLink>
          <UButton color="blue">Get it free</UButton>
        </NuxtLink>
        <NuxtLink>
          <UButton color="blue" variant="soft">Sign in</UButton>
        </NuxtLink>
      </div>

    </nav>
  </header>
</template>

<script setup lang="ts">

</script>
