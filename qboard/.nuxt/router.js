import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ec30cce = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _597a4165 = () => interopDefault(import('..\\pages\\auth\\resetPass.vue' /* webpackChunkName: "pages/auth/resetPass" */))
const _26bf9f92 = () => interopDefault(import('..\\pages\\auth\\resetPassMessage.vue' /* webpackChunkName: "pages/auth/resetPassMessage" */))
const _740f0bfa = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _4b25779f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth/login",
    component: _5ec30cce,
    name: "auth-login"
  }, {
    path: "/auth/resetPass",
    component: _597a4165,
    name: "auth-resetPass"
  }, {
    path: "/auth/resetPassMessage",
    component: _26bf9f92,
    name: "auth-resetPassMessage"
  }, {
    path: "/auth/signup",
    component: _740f0bfa,
    name: "auth-signup"
  }, {
    path: "/",
    component: _4b25779f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
