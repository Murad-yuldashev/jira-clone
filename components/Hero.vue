<template>
  <section class="flex md:flex-row flex-col md:justify-between justify-center h-screen items-center gap-4 px-4 md:px-0">
    <div class="flex flex-col space-y-3 md:pl-20 pl-0 md:text-left text-center mb-5">
      <h1 class="md:text-5xl sm:text-3xl text-xl">Move fast, stay aligned, and build better - together</h1>
      <p class="sm:text-lg text-base opacity-80">The #1 software development tool used by agile teams</p>

      <NuxtLink to="/auth">
        <UButton color="blue">Try it free</UButton>
      </NuxtLink>
    </div>

    <div class="w-full">
      <NuxtImg src="/hero.webp"/>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>