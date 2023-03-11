<template>
  <footer class="bg-secondary py-10">
    <div class="container ">
      <div class="flex justify-between ">
        <div>
          <NuxtLink to="/"><img src="~/assets/img/header-logo.png" class="h-14" /></NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="#">Item 1</NuxtLink>
          <NuxtLink to="#">Item 2</NuxtLink>
          <NuxtLink to="#">Item 3</NuxtLink>
          <NuxtLink to="#">Item 4</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="#">Item 1</NuxtLink>
          <NuxtLink to="#">Item 2</NuxtLink>
          <NuxtLink to="#">Item 3</NuxtLink>
          <NuxtLink to="#">Item 4</NuxtLink>
        </div>
      </div>
      <div class="flex justify-center mt-2">
        <p class="font-bold">Copyright © 2023 Ionut. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>