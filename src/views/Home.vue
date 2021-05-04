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
      <button class="btn btn-primary text-gray-100"> <a href="mailto:benstarkie19@gmail.com">Get In touch</a> </button> 
    </div>
  </div>
</div>
<section>
  
  <div class="skewed"></div>
</section>
  </main>
  
  <section>
    <section id="about" class="text-gray-100 body-font bg-base-200 ">
                <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
                    <div class="flex flex-col items-center w-full pt-0 mb-16 text-center lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
                        <h3 class="mb-5 text-5xl text-center font-bold ">
                          <span class="font-medium tracking-wide btn btn-ghost text-primary transition-colors duration-200 hover:text-teal-accent-400">0.1</span> About Me. 
                          <span class="font-large tracking-wide text-primary transition-colors duration-200 hover:text-teal-accent-400">――――――――</span></h3> 
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 xl:text-left lg:text-2xl opacity-50">
                      Hello! My name is Benjamin and I enjoy creating things that stay on
                      the internet. My interest in web development started back in 2017 at
                      college while studying computing with a twist of media studys.
                    </p>
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl opacity-50">
                      Coming to the end of my undergraduate degree at Edge Hill University, 
                      studying was changeling but interesting experience within the coronavirus pandemic. 
                      In light of recent events for my final year project, 
                      I started developing a Student Accommodation App based on React Native for students struggling to find a place to stay while studying. 
                      With hope to one day finish it and fully release it.
                    </p>
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl opacity-50">
                      Here are a few technologies I've been working with recently 
                    </p>
                   <ul class="list-inside mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl ">
                     <li>React Native</li> 
                     <li>Vue</li>
                     <li>HTML</li>
                     <li>CSS/Sass</li>
                     <li>Laravel/PHP</li>
                     </ul>
                    <div class="flex justify-center">
                        <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            <a href="https://github.com/Benstarkie19">Github</a>       
                        </button>
                    </div>
                </div>
                <div class="w-5/6 lg:max-w-sm lg:w-full md:w-1/2">
                    <img class="object-cover object-center mb-8 rounded-btn ring ring-primary ring-offset-base-100 ring-offset-2 " alt="hero"
                        src="../assets/face.png">
                </div>
            </div>
        </section>              
  </section>



  <section>
  
  <div class="skewed1"></div>
</section>



<section>
<section class="text-gray-100 body-font bg-base-200 ">
  <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
    <div class="flex flex-col mt-24 items-center w-full pt-0 mb-16 text-center lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
    <h3 class="text-5xl text-center font-bold ">
      <span id="project" class="font-medium tracking-wide btn btn-ghost text-primary transition-colors duration-200 hover:text-teal-accent-400">0.2</span> Projects. 
      <span class="font-large tracking-wide text-primary transition-colors duration-200 hover:text-teal-accent-400">――――――――</span></h3> 


<section class="text-white body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="mx-auto  md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <h3 class="mb-5 font-mono text-primary text-xl font-light">
                 Featured Projects
          </h3>
          <span class="mt-1 opacity-50 text-sm "> May 1, 2021</span>
        </div>
        <div class="md:flex-grow">
          <h3 class="mb-5 text-4xl text-center font-bold text-primary "> Flatmate-Finder-Application</h3> 
          <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl opacity-50">A cross-platform application developed using React native. Enabling students of Edge Hill University to find accommodation once development is finished. Currently in working prototype stage testing both android/Ios and the web app counterpart. Hosted on GitHub for open-source availability, Feel free to fork and edit.  </p>
            <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="../assets/screen1.png" class="rounded-2xl shadow-5xl border-2 border-primary hover:border-white"> 
    </div>
          <button class="items-center px-6 py-2 mt-10 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            <a href="https://github.com/Benstarkie19/Flatmate-Finder-Application">Github Repo</a>       
                        </button>
        </div>
      </div>
    </div>




    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="mx-auto  md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <h3 class="mb-5 font-mono text-primary text-xl font-light">
                 Portfolio Project
          </h3>
          <span class="mt-1 opacity-50 text-sm "> March 23, 2021</span>
        </div>
        <div class="md:flex-grow">
          <h3 class="mb-5 text-4xl text-center font-bold text-primary "> MDS-Global-AgentView-Designs</h3> 
          <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl opacity-50">MDS global agent view UI redesign based on the given use case provided by the business.  </p>
            <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="../assets/screen2.png" class="rounded-2xl shadow-5xl border-2 border-white"> 
    </div>
          <button class="items-center px-6 py-2 mt-10 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            <a href="/mds">More Infomation</a>       
                        </button>
        </div>
      </div>
    </div>


        <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="mx-auto  md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <h3 class="mb-5 font-mono text-primary text-xl font-light">
                 Portfolio Project
          </h3>
          <span class="mt-1 opacity-50 text-sm "> Feb 25, 2021</span>
        </div>
        <div class="md:flex-grow">
          <h3 class="mb-5 text-4xl text-center font-bold text-primary "> J.J-Whitley-Small-Task</h3> 
          <p class="mb-8 text-base leading-relaxed text-left text-gray-1000 lg:text-left lg:text-2xl opacity-50">Designed a small based website on JJ Whitley vodka. The first project using sass/CSS with standard HTML no JS framework.</p>
            <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="../assets/screen3.png" class="rounded-2xl shadow-5xl border-2 border-primary "> 
    </div>
          <button class="items-center px-6 py-2 mt-10 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            <a href="/whitley">More Infomation</a>       
                        </button>
        </div>
      </div>
    </div>

  </div>
</section>
  </div>
</div>
</section>
</section>


<section>
  
  <div class="skewed"></div>
</section>



<section class="text-white body-font  bg-base-200 ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
          <h3 class="text-5xl text-center font-bold ">
      <span id="contact" class="font-medium tracking-wide btn btn-ghost text-primary transition-colors duration-200 hover:text-teal-accent-400">0.3</span> Contact. </h3> 

       
      <p class="mb-8 text-base leading-relaxed text-center text-gray-1000 lg:text-center lg:text-2xl opacity-50">
        
                      My emails are always open for a chat or for any inquirys, please don't hesitate to contact me (benstarkie19@gmail.com) </p>   
                          <button class="btn btn-primary text-center text-gray-100"> <a href="mailto:benstarkie19@gmail.com">Get In touch</a> </button>                
    </div>

        </div>
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

.skewed1 {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background: #f28c18;
  z-index: 0;
  transform: skewY(355deg);
}
</style>