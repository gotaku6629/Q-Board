export default function ({ app, redirect }) {
    if (!app.$fire.auth.currentUser) {
      return redirect('/auth/login')
    }
  }