import Vue from 'vue'
import VueRouter from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
// import { createRouter } from 'vue2-helpers/vue-router'
import { createRouter } from '@/modules/vue-router'
import generatedRoutes from '~pages'

console.log(generatedRoutes)

Vue.use(VueRouter)

const router = createRouter({
  base: '/',
  mode: 'history',
  routes: setupLayouts(generatedRoutes),
})

export default router
