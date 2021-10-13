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
  byQuestion: (state) => (questionId) => {
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
  add: firestoreAction(function (_, { title, detail, userId, questionId}) {
    return this.$fire.firestore.collection('answers').add({ title, detail, userId, question_uid: questionId})
  }),
  remove: firestoreAction(function ({ getters }, { answerId }) {
    const user = this.$fire.auth().currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const answer = getters.byId(answerId);
    if (!answer) {
      throw new Error('invalid answer id')
    }

    if (answer.admin_uid !== user.uid) {
      throw new Error('permission denied')
    }

    return this.$fire.firestore.collection('answers').doc(answerId).delete()
  }),
  join: firestoreAction(function ({ getters }, { answerId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const answer = getters.byId(answerId)
    if (!answer) {
      throw new Error('invalid answer id')
    }

    return this.$fire.firestore.collection('answers').doc(answerId).update({ users: this.$fireModule.firestore.FieldValue.arrayUnion(user.uid) })
  }),
  leave: firestoreAction(function ({ getters }, { answerId }) {
    const user = this.$fire.auth.currentUser;

    if (user === null) {
      throw new Error('is not logged in')
    }

    const answer = getters.byId(answerId)
    if (!answer) {
      throw new Error('invalid answer id')
    }

    return this.$fire.firestore.collection('answers').doc(answerId).update({ users: this.$fireModule.firestore.FieldValue.arrayRemove(user.uid) })
  }),
}
