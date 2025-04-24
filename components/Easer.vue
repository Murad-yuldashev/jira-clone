<template>
  <section class="pb-20">
    <h1 class="md:text-4xl sm:text-3xl text-xl font-medium mt-20 text-center">Easier than ever</h1>
    <div class="flex items-center justify-between max-w-xl mx-auto mt-4">
      <div class="size-16 rounded-full bg-blue-500 dark:bg-blue-800 flex items-center justify-center">
        <Icon name="material-symbols:file-copy" class="text-white text-4xl"/>
      </div>
      <div
          class="flex-1 items-center h-2 bg-gradient-to-r from-blue-500 to-gray-500 dark:from-blue-800 dark:to-gray-800"></div>
      <div class="size-16 rounded-full bg-gray-500 dark:bg-gray-800 flex items-center justify-center">
        <Icon name="material-symbols-light:linked-services" class="text-white text-4xl"/>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 mt-20">
      <div class="bg-blue-500 dark:bg-blue-800 p-8">
        <div class="flex flex-col items-center space-x-2">
          <h1 class="text-2xl font-medium">Templates give you a had start</h1>
          <p class="text-xl">Get started with ready-made templates.</p>
        </div>

        <div class="" v-for="(item, index) of templates" :key="index">
          <div class="flex flex-col mt-4">
            <div class="bg-gray-300 dark:bg-gray-800 flex items-center gap-5 h-20">
              <div class="flex justify-between items-center bg-blue-500/30 dark:bg-blue-800/30 p-3 h-full">
                <NuxtImg :src="item?.image" class="w-12"/>
              </div>
              <div class="flex flex-col space-y-2">
                <h2 class="font-medium text-lg">{{ item?.name }}</h2>
                <div class="group flex items-center gap-1 hover:underline" role="button">
                  <span>Learn more</span>
                  <Icon name="mdi-light:arrow-right" class="group-hover:translate-x-2 transition"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4 mt-12 rounded-r-full flex flex-col span-y-2 bg-gradient-to-l from-gray-300 to-blue-300 dark:from-gray-800 dark:to-blue-800">
          <Icon name="mingcute:quote-left-fill" class="md:text-7xl sm:text-3xl text-2xl"/>
          <p class="md:text-lg text-base pl-2">You can decide how you are working as a team first and then let the software work around you</p>
          <div class="pl-2 opacity-70">
            <p class="font-bold">MARIA BONORCHIS</p>
            <p class="text-sm">AGILE DELIVERY MANAGER, CANCER RESEARCH UK</p>
          </div>
        </div>
      </div>
    
      <div class="bg-gray-300 dark:bg-gray-800 p-8 text-center">
        <h1 class="text-2xl font-medium">Then customize as you grow</h1>
        <p class="text-xl ">Jira adapts to the way you work, not the other way around. Start simple, customize as you go.</p>
        <div class="flex items-center justify-center mt-5">
          <NuxtImg src="/product.webp" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {templates} from "~/constants";
</script>