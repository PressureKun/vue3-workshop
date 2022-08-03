<script setup>

</script>

<template>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Ready to dive in?
        <br />
        <span class="text-indigo-600 font-title"
          >Vite + Vue 3 + Tailwind CSS</span
        >
      </h2>
    </div>

    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
    
      <ul>
        <li>
          <router-link :to="{ path: '/examples/example_1' }">Example 1. Dynamic form with data validation</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/examples/example_2' }">Example 2. Overflowed text block with progressbar and form validation.</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/examples/example_3' }">Example 3. Form with validation and status icons.</router-link>
        </li>
      </ul>
    
    </div>


  </div>
</template>
