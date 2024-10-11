<template>
  <div class="flex flex-col gap-2">
    <Header />

    <div class="flex justify-center mt-5">
      <div class="prose bg-white max-w-2xl p-8">
        <h2 class="text-center">About PolarRes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue molestie lorem, id rhoncus ipsum. Ut sit amet est in urna maximus faucibus. Mauris posuere semper ligula, vitae
          vestibulum mi aliquam vel. Nam at dictum lacus.
        </p>

        <h2 class="text-center">The Storyboards</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue molestie lorem, id rhoncus ipsum. Ut sit amet est in urna maximus faucibus. Mauris posuere semper ligula, vitae
          vestibulum mi aliquam vel. Nam at dictum lacus.
        </p>

        <h2 class="text-center">Credit</h2>
        <p>
          Kalverla, P., Alidoost, F., Liu, Y., Verhoeven, S., & Vreede, B. (2002). EUCP Storyboard viewer (v0.1.0). Zenodo.
          <NuxtLink :href="'https://doi.org/10.5281/zenodo.5905678'" :target="'_blank'" class="break-all">https://doi.org/10.5281/zenodo.5905678</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
