

export default async function (session, firebase, ctx, inject) {
  await import(/* webpackChunkName: 'firebase-auth' */'firebase/auth')

  const authService = session.auth()

  authService.useEmulator('http://localhost:9099')

  return authService
}
