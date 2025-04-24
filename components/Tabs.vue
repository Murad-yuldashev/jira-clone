
<template>
  <section class="pb-10">
    <h1 class="md:text-4xl sm:text-2xl text-xl font-medium px-4">All from a single source of truth</h1>

    <UTabs :items="tabs" class="mt-8 px-4 " :ui="{list: {width: 'w-fit'}}" >
      <template #item="{ item }">
       <div class="flex lg:flex-row flex-col justify-between items-center gap-6 ">
         <div class="lg:w-[40%] w-full">
           <h1 class="md:text-4xl sm:text-3xl text-xl">{{item.label}}</h1>
           <p class="sm:mt-6 mt-2 md:text-xl sm:text-lg text-base">{{item?.description}}</p>
           
           <div class="py-4 mt-12 rounded-r-full flex flex-col span-y-2 bg-gradient-to-r from-white to-blue-300 dark:from-black dark:to-blue-800">
             <Icon name="mingcute:quote-left-fill" class="md:text-7xl sm:text-3xl text-2xl" />
             <p class="md:text-lg text-base pl-2">{{item.credentials?.text}}</p>
             <div class="pl-2 opacity-70">
               <p class="font-bold">{{item.credentials?.username}}</p>
               <p class="text-sm">{{item.credentials?.company}}</p>
             </div>
           </div>
         </div>

         <NuxtImg :src="item?.image" class="lg:w-[60%] w-full" />
       </div>
      </template>
    </UTabs>
  </section>
</template>

<script setup lang="ts">
  import {tabs} from "~/constants"
</script>
