<template>
  <header class="container py-2 px-5 rounded-2xl shadow-custom-box mt-5">
    <nav class="flex justify-between items-center">

      <div>
        <NuxtLink to="/"><img src="~/assets/img/header-logo.png" class="h-14" /></NuxtLink>
      </div>
      <div>
        <div
          class="flex gap-3 font-bold text-white [&>*]:bg-primary [&>*]:rounded-lg [&>*]:px-5 [&>*]:py-2 [&>*]-hover:bg-secondary">
          <NuxtLink to="/" class="hover:bg-secondary duration-200">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:bg-secondary duration-200">About</NuxtLink>
          <NuxtLink to="/posts/1" class="hover:bg-secondary duration-200">Post 1</NuxtLink>
          <NuxtLink to="/posts/2" class="hover:bg-secondary duration-200">Post 2</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>