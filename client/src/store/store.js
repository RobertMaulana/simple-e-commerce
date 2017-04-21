import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
    categories: [],
    products: [],
    orders: [],
    signup: '',
    signin: [],
    cart: '',
    dataCart: []
  },
  getters: {
    needActivation: (state) => {
      return state.signup
    },
    isLogin: (state) => {
      return window.localStorage.getItem('token')
    },
    popularProducts: (state) => {
      return state.products
    },
    cart: (state) => {
      return state.cart
    }
  },
  mutations: {
    signup: (state, payload) => {
      state.signup = 'new user need activation!'
    },
    signin: (state, payload) => {
      window.localStorage.setItem('token', payload.token);
      window.localStorage.setItem('user', payload.username);
      window.localStorage.setItem('id', payload.id);
      state.signin.push(payload)
      window.location = "/";
    },
    signinVerif: (state, payload) => {
      window.localStorage.setItem('token', payload.token);
      window.localStorage.setItem('user', payload.username);
      window.localStorage.setItem('id', payload.id);
      state.signin.push(payload)
    },
    popularProducts: (state, payload) => {
      state.products = payload
    },
    cart: (state, payload) => {
      state.cart = JSON.parse(payload).length
    },
    dataCart: (state, payload) => {
      state.dataCart = payload
    }
  },
  actions: {
    signup: ({commit}, payload) => {
      axios.post('http://localhost:3000/user/signup',{
        username  : payload.username,
        email     : payload.email,
        password  : payload.password,
        role      : payload.role,
        activate  : false,
      })
      .then((response) => {
        commit("signup", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    signin: ({commit}, payload) => {
      axios.post('http://localhost:3000/user/signin',{
        username  : payload.username,
        password  : payload.password,
      })
      .then((response) => {
        commit("signin", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    signinVerif: ({commit}, payload) => {
      axios.post('http://localhost:3000/user/signin',{
        username  : payload.username,
        password  : payload.password,
      })
      .then((response) => {
        commit("signinVerif", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    popularProducts:({commit}) => {
      axios.get('http://localhost:3000/product')
      .then((response) => {
        commit("popularProducts", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    checkout:({commit}, payload) => {
      axios.post('http://localhost:3000/order',payload)
      .then((response) => {
        console.log(response.data);
        commit("signinVerif", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
})
