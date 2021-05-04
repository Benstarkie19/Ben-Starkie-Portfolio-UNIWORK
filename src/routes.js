import Home from './views/Home.vue'
import About from './views/About.vue'
import Mds from './views/Mds.vue'
import Whitley from './views/Whitley.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: '' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
    {
    path: '/mds',
    meta: { title: '' },
    component: Mds,
  },
      {
    path: '/whitley',
    meta: { title: '' },
    component: Whitley,
  },
  { path: '/:path(.*)', component: NotFound },
]
