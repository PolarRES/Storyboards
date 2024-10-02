<template>
  <div class="story flex-1 flex flex-col gap-2 min-h-0">
    <!-- Banner -->
    <div class="flex gap-10 m-2 items-center flex-wrap">
      <NuxtLink :to="`/`">
        <img class="max-h-24 mix-blend-darken" src="/PolarRES-logo-min.png" alt="Polar RES" />
      </NuxtLink>
      <h1 class="text-2xl text-prDarkBlue-100">Storyboard: {{ data?.storyContent.title }}</h1>
    </div>

    <!-- Chapter overview bar -->
    <div class="flex no-wrap text-left gap-2 overflow-x-auto">
      <div v-for="(headline, idx) of data?.headlines" :key="idx" class="flex">
        <div role="button" class="flex-grow bg-white rounded p-3 prose flex items-center" @click="toggleChapter(idx)">
          {{ headline }}
        </div>
      </div>
    </div>

    <!-- Chapter image and description -->
    <div v-for="(chapter, idx) in data?.chapters" v-show="idx === currentChapter" :key="idx" class="flex-1 flex flex-row-reverse justify-end gap-2 min-h-0">
      <div class="p-4 w-1/3 bg-white rounded overflow-auto">
        <ContentRenderer :value="chapter">
          <div class="prose mb-6">
            <ContentRendererMarkdown :value="chapter" />
          </div>
        </ContentRenderer>
        <EditOnGitHub :target="gitHubURL()" />
        <p class="prose italic">
          For more information on editing stories, see <a href="https://blog.esciencecenter.nl/storyboards-for-science-communication-85e399e5c1b5" target="_blank">this blog post</a>.
        </p>
      </div>
      <div class="w-2/3 bg-white rounded">
        <img
          v-if="!chapter.props?.image.endsWith('html')"
          :src="getContent(chapter.props?.image)"
          alt="story image"
          class="object-contain w-auto h-full max-w-full max-h-full mx-auto"
          @click="openBigImage"
        />
        <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
        <div v-show="showBigImage" v-if="!chapter.props?.image.endsWith('html')" class="fixed inset-0 flex bg-gray-900 bg-opacity-80" @click="closeBigImage">
          <div class="fixed bg-white shadow-2xl inset-5 z-40 flex justify-center" @click="closeBigImage">
            <img :src="getContent(chapter.props?.image)" alt="story image" class="w-auto h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();

const currentChapter = ref(0);
const showBigImage = ref(false);

const { story } = params;

const { data } = await useAsyncData("styory", async () => {
  let baseContent = queryContent(`/stories/${story}`);
  const storyContent = await baseContent.findOne();

  storyContent.slug = storyContent._path?.replace("/stories/", "");

  const chapters = storyContent.body?.children
    .filter((child) => child.tag === "chapter")
    .map((child) => {
      return { body: { children: child.children }, props: child.props };
    });
  const headlines = chapters?.map((chapter) => chapter.props?.headline);

  return { storyContent, headlines, chapters };
});

const toggleChapter = (i: number) => {
  currentChapter.value = i;
};

const gitHubURL = () => {
  return `https://github.com/PolarRES/Storyboards/blob/main/public/stories/${data.value?.storyContent.slug}.md`;
};

const getContent = (path: string) => {
  return `stories/_${story}/${path}`;
};

const openBigImage = () => {
  showBigImage.value = true;
};
const closeBigImage = () => {
  showBigImage.value = false;
};
</script>
