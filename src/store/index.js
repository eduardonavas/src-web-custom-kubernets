import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ambiente:{},
    namespace:''
  },
  getters: {
    ambiente(state){
      return state.ambiente
    },
    namespace(state){
      return state.namespace
    }
  },
  mutations: {
    setAmbiente(state, payload){
       state.ambiente = payload
    },
    setNamespace(state, payload){
      state.namespace = payload
   }
  },
  actions: {
  },
  modules: {
  }
})
