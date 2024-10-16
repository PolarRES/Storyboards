<template>
  <div class="flex flex-col gap-2">
    <Header />

    <div class="flex justify-center mt-5">
      <div class="prose bg-white max-w-2xl p-8">
        <h2 class="text-center">About PolarRes</h2>
        <p>
          Despite the crucial role Polar Regions play in stabilising the global climate system, there are still critical knowledge gaps regarding the impact of polar climate processes on multiple scales and how they are evolving with our changing global climate. PolarRES studies the interactions between the atmosphere, oceans, and sea ice in the Arctic and Antarctic. By understanding these processes and interactions in conjunction with an innovative storylines approach we adopt in PolarRES, a refined set of climate projections can be provided for the Polar Regions. This paves way for a more reliable assessment of the potential social and environmental impacts of climate change.
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
