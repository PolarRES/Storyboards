import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  ssr: true,

  devServer: {
    port: 3001,
  },

  app: {
    baseURL: "/storyboards/",
  },

  components: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/google-fonts", "@nuxt/image"],

  googleFonts: {
    families: {
      "Open Sans": {
        wght: [400],
        ital: [400],
      },
      Montserrat: {
        wght: [700],
      },
    },
  },

  content: {
    // fullTextSearchFields: ['id', 'slug', 'title', 'author', 'thumbnail', 'category'],

    sources: {
      // content: {
      //   driver: "fs",
      //   base: resolve(__dirname, "public/stories"),
      // },

      // Additional sources
      fa: {
        prefix: "/stories", // All contents inside this source will be prefixed with `/fa`
        driver: "fs",
        // ...driverOptions
        base: resolve(__dirname, "public/stories"), // Path for source directory
      },
    },

    markdown: {
      anchorLinks: false,

      remarkPlugins: ["remark-directive", "remark-chapters-config"],
      tags: {
        a: "ContentLink",
      },
    },
  },
});
