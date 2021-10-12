import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'
import functionsService from './service.functions.js'

const appConfig = {"apiKey":"AIzaSyCXT-ib_BFvRb0bOKgl2zKxBQx2Szfn6Ds","authDomain":"aki-qboard-scsk2021.firebaseapp.com","projectId":"aki-qboard-scsk2021","storageBucket":"aki-qboard-scsk2021.appspot.com","messagingSenderId":"931061747914","appId":"1:931061747914:web:5e25bd1904124380432433","measurementId":"G-CE8JL52M2Q"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),
    functionsService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),
      functionsService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore,
    storage,
    functions
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore,
    storage: storage,
    functions: functions
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}