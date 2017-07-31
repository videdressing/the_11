import { firebaseMutations } from 'vuexfire'

export default {
  state: {
    // example: { id: 1, name: 'Apple', price: 100, stock: 10 }
    items: []
  },
  getters: {
    allVenues: state => state.items
  },
  mutations: firebaseMutations('venues'),
  actions: {}
}
