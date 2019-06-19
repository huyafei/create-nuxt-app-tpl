import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user,
  },

  state: {
    counter: 0
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation 【直接修改】
  // 使用 store.commit('SET_DOCUMENT','值') 同步操作
  mutations: {},
  //函数提交 最终提交还是 通过 mutation 提交
  actions: {},
  getters

})

export default store
