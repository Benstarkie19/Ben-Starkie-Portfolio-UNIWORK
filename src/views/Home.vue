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
                <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
                    <div
                        class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
                        <h3 class="mb-5 text-2xl text-center font-bold "><span class="font-medium tracking-wide btn btn-ghost text-primary transition-colors duration-200 hover:text-teal-accent-400">0.1</span> About Me. <span class="font-medium tracking-wide text-primary transition-colors duration-200 hover:text-teal-accent-400">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span></h3> 
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-1xl">
                      Hello! My name is Benjamin and I enjoy creating things that stay on
                      the internet. My interest in web development started back in 2017 at
                      college while studying computing with a twist of media studys.
                    </p>
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-1xl">
                      Coming to the end of my undergraduate degree at Edge Hill University, 
                      studying was changeling but interesting experience within the coronavirus pandemic. 
                      In light of recent events for my final year project, 
                      I started developing a Student Accommodation App based on React Native for students struggling to find a place to stay while studying. 
                      With hope to one day finish it and fully release it.
                    </p>
                    <div class="flex justify-center">
                        <button
                              class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            <a href="https://github.com/Benstarkie19">Github</a>
                            
                        </button>
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