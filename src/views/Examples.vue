<template>
  <main class="page overflow-hidden">
    <div class="wrapper">
      <div class="lead-block py-8">

        <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Example of vue 3 education
        <br />
        <span class="text-indigo-600 font-title"
          >Vite + Vue 3 + Tailwind CSS</span
        >
      </h2>

      </div>

      <div class="example-content bg-slate-900 rounded-xl p-6 text-indigo-100">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
