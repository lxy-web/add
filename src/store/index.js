import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  handerData:{},
  },
  mutations: {
	  setHaederDate(state,plytion){
		  console.log(plytion)
		  state.handerData=plytion;
	  }
  },
  actions: {
  },
  modules: {
  }
})
