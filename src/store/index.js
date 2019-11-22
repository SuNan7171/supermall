import Vue from 'vue'
import Vuex from 'vuex'
import actions from './Actions'
import mutations from './Mutations'
import state from './State'
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
})
