import { firestoreAction } from 'vuexfire'

export const state = () => ({
  items: [],
})

export const getters = {
  all: state => {
    return state.items
  },
  byId: (state) => (questionId) => {
    const res = state.items.filter(question => question.id === questionId)
    return res.length > 0 ? res[0] : null
  },
  byCategory: (state) => (category = "") => {
    if (!category) {
      return state.items
    }

    return state.items.filter(question => question.category === category)
  }
}

export const actions = {
  bind: firestoreAction(function ({ bindFirestoreRef }) {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef('items', this.$fire.firestore.collection('questions').orderBy('start'))
  }),
}