import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL_LOCAL = "/";
const BASE_URL_GITHUB = "/Storyboards/";

const BASE_URL = process.env.NODE_ENV !== "production" ? BASE_URL_LOCAL : BASE_URL_GITHUB;

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  ssr: true,

  devServer: {
    port: 3001,
  },

  app: {
    baseURL: `${BASE_URL}`,
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: `${BASE_URL}favicon.png` }],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: `${BASE_URL}`,
    },
  },

  components: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/google-fonts", "@nuxt/image"],

  googleFonts: {
    families: {
      "Open Sans": {
        wght: [400, 600],
        ital: [400, 600],
      },
      Montserrat: {
        wght: [700],
      },
    },
  },

  content: {
    // fullTextSearchFields: ['id', 'slug', 'title', 'author', 'thumbnail', 'category'],

    sources: {
      // Additional sources
      stories: {
        prefix: "/stories", // All contents inside this source will be prefixed with `/fa`
        driver: "fs",
        // ...driverOptions
        extensions: [".md"],
        ignore: ["/stories/**/*"],
        base: resolve(__dirname, "public/stories"), // Path for source directory
      },
    },

    experimental: {
      search: {
        indexed: true,
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
