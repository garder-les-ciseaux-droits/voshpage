import { createRouter, createWebHashHistory } from "vue-router";

import MainLanding from '/src/components/MainLanding.vue'
import Chapter1 from '/src/components/views/Chapter1.vue'
import Chapter2 from '/src/components/views/Chapter2.vue'
import Links from '/src/components/Pages/Links.vue'
import OnlineReading from '/src/components/Pages/OnlineReading.vue'
import FullAboutAuthor from '/src/components/Pages/FullAboutAuthor.vue'
import AboutThisHell from '/src/components/Pages/AboutThisHell.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/',

          component: MainLanding
        },
        {
          path: '/chapter1',

          component: Chapter1
        },
        {
          path: '/chapter2',

          component: Chapter2
        },
        {
          path: '/links',
  
          component: Links
        },
        {
          path: '/author',

          component: FullAboutAuthor
        },
        {
          path: '/read',

          component: OnlineReading
        },
        {
          path: '/thishell',
          component: AboutThisHell
        }
      ]
})