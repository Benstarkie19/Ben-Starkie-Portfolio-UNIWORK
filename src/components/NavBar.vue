<template>
  <div class="bg-neutral">
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
          <div class="avatar">
            <div class="rounded-full w-14 h-14 m-1">
              <img src="../assets/logo.png" />
            </div>
          </div>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Benjamin Starkie</span>
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="About"
              title="About"
              class="font-medium tracking-wide btn btn-ghost text-primary transition-colors duration-200  hover:text-teal-accent-400">01. <span class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">About</span></a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Contact"
              title="Contact"
              class="font-medium tracking-wide text-primary btn btn-ghost transition-colors duration-200  hover:text-teal-accent-400">02. <span class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">Contact</span></a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Projects"
              title="Projects"
              class="font-medium tracking-wide text-primary btn btn-ghost transition-colors duration-200 hover:text-teal-accent-400">03. <span class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">Projects</span></a>
          </li>
          <li>
            <a
              href="..\public\assets/Main_CV.pdf"
              aria-label="CV"
              title="CV"
              class=""><button class="btn btn-primary text-gray-100">Resume</button></a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true">
            <svg class="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-neutral rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center">
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false">
                    <svg class="w-5 text-white" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="/"
                      aria-label="About"
                      title="About"
                      class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">About</a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Contact"
                      title="Contact"
                      class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">Contact</a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Projects"
                      title="Projects"
                      class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">Projects</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
