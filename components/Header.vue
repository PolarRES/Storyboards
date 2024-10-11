<template>
  <div class="flex gap-10 m-2 items-center flex-wrap">
    <NuxtLink :to="`/`" class="order-0">
      <img class="logo max-h-24 block md:hidden" src="/PolarRES_logo_1_portrait_RGB-min.png" alt="Polar RES" />
      <img class="logo max-h-24 hidden md:block" src="/PolarRES-logo-min.png" alt="Polar RES" />
    </NuxtLink>

    <div v-if="title" class="order-2 lg:order-1 lg:flex-1">
      <h1 class="text-2xl text-prDarkBlue-100">{{ title }}</h1>
    </div>

    <div class="order-1 lg:order-2 flex gap-5 justify-end ml-auto">
      <NuxtLink :to="`/`">
        <h2 class="font-bold text-lg md:text-xl">Storyboards</h2>
      </NuxtLink>
      <NuxtLink :to="`/about`">
        <h2 class="font-bold text-lg md:text-xl">About</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps(["title"]);
</script>
