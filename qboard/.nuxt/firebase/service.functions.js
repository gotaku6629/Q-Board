

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-functions' */'firebase/functions')

  const functionsService = session.functions('asia-northeast1')

  functionsService.useFunctionsEmulator('http://localhost:5001')

  return functionsService
}
