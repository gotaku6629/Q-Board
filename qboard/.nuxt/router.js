import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _755c028e = () => interopDefault(import('..\\pages\\createQuestion.vue' /* webpackChunkName: "pages/createQuestion" */))
const _5072bbe5 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _7efe8cfc = () => interopDefault(import('..\\pages\\auth\\resetPass.vue' /* webpackChunkName: "pages/auth/resetPass" */))
const _7a9b27ca = () => interopDefault(import('..\\pages\\auth\\resetPassMessage.vue' /* webpackChunkName: "pages/auth/resetPassMessage" */))
const _0a3eadcc = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _3857bd19 = () => interopDefault(import('..\\pages\\questions\\_id.vue' /* webpackChunkName: "pages/questions/_id" */))
const _24979e8e = () => interopDefault(import('..\\pages\\questions\\_questionId\\createAnswer.vue' /* webpackChunkName: "pages/questions/_questionId/createAnswer" */))
const _45e368ee = () => interopDefault(import('..\\pages\\questions\\_questionId\\_answerId.vue' /* webpackChunkName: "pages/questions/_questionId/_answerId" */))
const _2c9ff814 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/createQuestion",
    component: _755c028e,
    name: "createQuestion"
  }, {
    path: "/auth/login",
    component: _5072bbe5,
    name: "auth-login"
  }, {
    path: "/auth/resetPass",
    component: _7efe8cfc,
    name: "auth-resetPass"
  }, {
    path: "/auth/resetPassMessage",
    component: _7a9b27ca,
    name: "auth-resetPassMessage"
  }, {
    path: "/auth/signup",
    component: _0a3eadcc,
    name: "auth-signup"
  }, {
    path: "/questions/:id?",
    component: _3857bd19,
    name: "questions-id"
  }, {
    path: "/questions/:questionId?/createAnswer",
    component: _24979e8e,
    name: "questions-questionId-createAnswer"
  }, {
    path: "/questions/:questionId?/:answerId?",
    component: _45e368ee,
    name: "questions-questionId-answerId"
  }, {
    path: "/",
    component: _2c9ff814,
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
