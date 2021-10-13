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
    return bindFirestoreRef('items', this.$fire.firestore.collection('questions'))// .orderBy('start'))
  }),
  add: firestoreAction(function (_, { user, category, date, title, detail, lebel}) {
    return this.$fire.firestore.collection('questions').add({ user, date, category, title, detail, lebel})
  }),  
}