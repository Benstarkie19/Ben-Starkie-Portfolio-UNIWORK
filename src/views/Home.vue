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
      <h3 class="mb-5 font-mono text-primary text-lg font-light">
            Hi, my name is
          </h3>
          <h1 class="mb-5 text-5xl font-bold ">
            Benjamin Starkie.
          </h1>
          <h1 class="mb-5 text-5xl font-bold opacity-50 ">
            A web design and development graduate.
          </h1>
      <p class="mb-5 opacity-50">
            I'm Benjamin Starkie, a UK-based web designer who specializes in building (and occasionally designing). I craft, create websites, illustrate, and make logos.
          </p> 
      <button class="btn btn-primary text-gray-100">Get In touch</button> 
    </div>
  </div>
</div>
<section>
  
  <div class="skewed"></div>
</section>
  </main>
  
  <section>
 <section class="text-gray-100 body-font bg-base-200 ">
                <div class="container  flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
                    <div
                        class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
                    <h2 class="mb-1 text-xs font-medium tracking-widest text-gray-100 title-font">
                        Your tagline
                    </h2>
                    <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-gray-100 lg:text-left lg:text-5xl title-font">
                        Medium length display headline.
                    </h1>
                    <p class="mb-8 text-base leading-relaxed text-center text-gray-1000 lg:text-left lg:text-1xl">
                        Deploy
                        your mvp in
                        minutes, not days. WT offers you a a wide selection swapable sections for your landing page.
                    </p>
                    <div class="flex justify-center">
                        <button
                            class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            Action
                        </button>
                        <p class="mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
                            It will take you to candy shop.
                            <br class="hidden lg:block">
                            <a href="#"
                                class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                                Learn More
                                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    width="20" height="20" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img class="object-cover object-center rounded-lg " alt="hero"
                        src="https://dummyimage.com/720x600/F3F4F7/8693ac">
                </div>
            </div>
        </section>              
  </section>
</template>


<style>
.skewed {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background: #f28c18;
  z-index: 0;
  transform: skewY(5deg);
  transform-origin: top right;
}
</style>