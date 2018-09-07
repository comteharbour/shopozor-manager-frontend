import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/authorization'
import testModule from './modules/testModule'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
  state: {
    counter1: 0,
    counter2: 0
  },
  getters: {
    counter1: state => state.counter1,
    counter2: ({ counter2 }) => counter2
  },
  mutations: {
    increment1: state => state.counter1++,
    increment2: ({ counter2 }) => counter2++
  },
  actions: {
    increment1: context => context.commit('increment1'),
    increment2: ({ commit }) => commit('increment2')
  },
  modules: {
    auth,
    testModule
  }
})
