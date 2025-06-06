<template>
  <div class="flex flex-col gap-2">
    <Header title="Overview of PolarRES in Practice Stories" />

    <div class="m-2 flex justify-center">
      <!-- search -->
      <input v-model="query" type="search" class="w-4/5 max-w-96 m-4 p-2 self-center border rounded-md" placeholder="search" />
    </div>

    <!-- categories -->
    <div v-for="(category, key) in data?.categories" :key="key" class="flex flex-wrap gap-4 mb-8">
      <h3 class="prose-xl w-full subtitle text-prGreen-100">
        {{ category }}
      </h3>
      <!-- stories -->
      <StoryCard
        v-for="story in data?.stories.filter((story) => story.category === category)"
        :key="story.slug"
        :title="story.title"
        :author="story.author"
        :thumbnail="`${baseURL}stories/_${story.slug}/${story.thumbnail}`"
        :url="story.slug"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
import { ref, watch } from "vue";

interface StoryContentT extends ParsedContent {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  category: string;
}

const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

const query = ref("");

const parseStories = (stories: StoryContentT[]) => {
  const parsedStories = stories.map((s) => {
    s.slug = s._path?.replace("/stories/", "") + "/";
    return s;
  });

  const categories = [...new Set(stories.map((story) => story.category))];

  return { allStories: parsedStories, stories: parsedStories, categories };
};

const { data } = await useAsyncData("stories", async () => {
  // let baseContent = queryContent<StoryContentT>("/stories");
  // if (query.value){
  //   const reg = new RegExp(`${query.value}`, 'gmi')
  //   baseContent = baseContent.where({$or:[
  //     {title:{$regex:reg}},
  //     {author:{$regex:reg}},
  //   ]})
  // }
  // const stories = await queryContent<StoryContentT>("/stories").only(["id", "title", "author", "thumbnail", "category", "_path"]).find()

  const allStories = await queryContent<StoryContentT>("/stories").find();

  return parseStories(allStories);

  // // return { stories, categories };
  // const stories = allStories.map((s) => {
  //   s.slug = s._path?.replace("/stories/", "");
  //   return s;
  // });

  // const categories = [...new Set(stories.map((story) => story.category))];

  // return { stories, categories };
});

const inputQueryContent = async function (newQuery: string) {
  if (!data.value) return;

  const filteredQuery = newQuery.trim();
  if (!filteredQuery) {
    data.value.stories = data.value.allStories;
    return;
  }

  const results = await searchContent(newQuery);

  const resultsTitle = results.value.map((r) => r.title);

  const filteredStories = data.value?.allStories.filter((story) => resultsTitle.includes(story.title));

  data.value.stories = filteredStories ?? [];
};
watch(query, () => {
  inputQueryContent(query.value);
});
// const { data } = await useAsyncData("stories", async () => {

//   let baseContent = queryContent<StoryContentT>("/stories");
//   if (query.value){
//     const reg = new RegExp(`${query.value}`, 'gmi')
//     baseContent = baseContent.where({$or:[
//       {title:{$regex:reg}},
//       {author:{$regex:reg}},
//     ]})
//   }
//   // const stories = await queryContent<StoryContentT>("/stories").only(["id", "title", "author", "thumbnail", "category", "_path"]).find()
//   const stories = (await baseContent.find()).map(s => {
//     s.slug = s._path?.replace("/stories/","")
//     return s
//   })

//   const categories = [...new Set(stories.map(story => story.category ))]

//   return {stories, categories}

// }, {watch:[query]});
</script>
