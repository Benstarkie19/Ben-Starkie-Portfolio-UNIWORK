<script>
import { defineComponent } from 'vue'
import AboutMe from '@/components/AboutMe.vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: { NavBar },
})


</script>

<template>
    <NavBar />
  <main>
<div class="hero min-h-screen bg-base-200 ">
  <div class="text-center text-white hero-content">
    <div class="max-w-md">
      <h3 class="mb-5 font-mono text-primary text-xl font-light">
            Hi, my name is
          </h3>
          <h1 class="mb-5 text-6xl font-bold ">
            Benjamin Starkie.
          </h1>
          <h1 class="mb-5 text-5xl font-bold opacity-50 ">
            A web design and development graduate.
          </h1>
      <p class="mb-5 opacity-50">
            I'm Benjamin Starkie, a UK-based web designer who specializes in building (and occasionally designing) websites. I craft, create websites, illustrate, and make logos.
          </p> 
      <button class="btn btn-primary text-gray-100">Get In touch</button> 
    </div>
  </div>
</div>
  </main>
</template>


  