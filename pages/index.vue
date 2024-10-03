<template>
  <div class="flex flex-col gap-2">
    <!-- Banner -->
    <div class="flex gap-10 m-2 items-center flex-wrap">
      <img class="logo max-h-24" src="/PolarRES-logo-min.png" alt="Polar RES" />
      <h1 class="text-2xl text-prDarkBlue-100">Overview of Polar RES Storyboards</h1>
    </div>

    <div class="m-2 flex justify-center">
      <!-- search -->
      <input v-model="query" type="search" class="w-4/5 max-w-96 m-4 p-2 self-center border rounded-md" placeholder="search"></input>
    </div>

    <!-- categories -->
    <div v-for="(category, key) in data?.categories" :key="key" class="flex flex-wrap gap-4 mb-8">
        <h3 class="prose-xl w-full subtitle text-prGreen-100">
          {{ category }}
        </h3>
        <!-- stories -->
        <StoryCard
          v-for="story in data?.stories.filter(story => story.category === category)"
          :key="story.slug"
          :title="story.title"
          :author="story.author"
          :thumbnail="`stories/_${story.slug}/${story.thumbnail}`"
          :url="story.slug"
        />
      </div>

  </div>
</template>



<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

interface StoryContentT extends ParsedContent {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  category: string;
}

const query = ref("")

const { data } = await useAsyncData("stories", async () => {

  let baseContent = queryContent<StoryContentT>("/stories");
  if (query.value){
    const reg = new RegExp(`${query.value}`, 'gmi')
    baseContent = baseContent.where({$or:[
      {title:{$regex:reg}},
      {author:{$regex:reg}},
    ]})
  }
  // const stories = await queryContent<StoryContentT>("/stories").only(["id", "title", "author", "thumbnail", "category", "_path"]).find()
  const stories = (await baseContent.find()).map(s => {
    s.slug = s._path?.replace("/stories/","")
    return s
  })

  const categories = [...new Set(stories.map(story => story.category ))]

  return {stories, categories}

}, {watch:[query]});

</script>
