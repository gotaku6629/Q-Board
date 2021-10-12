import { firestoreAction } from 'vuexfire'

export const state = () => ({
  items: []
})

export const getters = {
  all: state => {
    return state.items
  },
  byId: (state) => (answerId) => {
    const res = state.items.filter(answer => answer.id === answerId)
    return res.length > 0 ? res[0] : null
  },
  byMovie: (state) => (questionId) => {
    return state.items.filter(answer => answer.question_uid === questionId)
  },
  countAudience: (state) => (questionId) => {
    const answers = state.items.filter(answer => answer.question_uid === questionId)
    let count = 0
    for (const answer of answers) {
      count += answer.users.length
    }

    return count
  },
}

export const actions = {
  bind: firestoreAction(function ({ bindFirestoreRef }) {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef('items', this.$fire.firestore.collection('answers'))
  }),
  add: firestoreAction(function (_, { title, users, detail, adminId, skyway, movieId, id }) {
    return this.$fire.firestore.collection('rooms').add({ title, users, detail, admin_uid: adminId, skyway, movie_uid: movieId, id })
  }),
  remove: firestoreAction(function ({ getters }, { roomId }) {
    const user = this.$fire.auth().currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const room = getters.byId(roomId);
    if (!room) {
      throw new Error('invalid room id')
    }

    if (room.admin_uid !== user.uid) {
      throw new Error('permission denied')
    }

    return this.$fire.firestore.collection('rooms').doc(roomId).delete()
  }),
  join: firestoreAction(function ({ getters }, { roomId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const room = getters.byId(roomId)
    if (!room) {
      throw new Error('invalid room id')
    }

    return this.$fire.firestore.collection('rooms').doc(roomId).update({ users: this.$fireModule.firestore.FieldValue.arrayUnion(user.uid) })
  }),
  leave: firestoreAction(function ({ getters }, { roomId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const room = getters.byId(roomId)
    if (!room) {
      throw new Error('invalid room id')
    }

    return this.$fire.firestore.collection('rooms').doc(roomId).update({ users: this.$fireModule.firestore.FieldValue.arrayRemove(user.uid) })
  }),
}
