<template>
  <NuxtLink :to="url" class="w-144 max-w-full flex">
    <div class="flex-1 flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
      <!-- story cards -->
      <div class="prose m-4 flex-1 flex flex-col justify-center">
        <h4>
          {{ title }}
        </h4>
        <p>
          {{ author }}
        </p>
      </div>
      <img :src="thumbnail" alt="storyboard preview" class="flex-1 min-w-0 object-cover p-2 max-h-60" />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["title", "author", "thumbnail", "url"],
};
</script>
