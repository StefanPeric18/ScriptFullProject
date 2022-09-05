import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
  },
  actions: {
    register({ commit }, obj) {
      fetch('http://127.0.0.1:9090/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( el => {
          if(el.hasOwnProperty("status") && el.status === "error")  
            alert(el.message); 
            
        });
    }
  },
  modules: {
  }
})
