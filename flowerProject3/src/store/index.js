import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    userSearch: '',
    filtered: [],
  },
  getters: {
    userSearch: (state) => state.userSearch,
    products: (state) => state.products,
    filtered: (state) => state.filtered,
    cart: (state) => state.cart,
  },
  mutations: {
    SET_userSearch: (state, userSearch) => {
      state.userSearch = userSearch;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
      state.filtered = products;
    },
    SEARCH(state, value) {
      const regexp = new RegExp(value, 'i');
      state.filtered = state.products.filter((el) => regexp.test(el.product_name));
    },
    ADD_TO_CART(state, product) {
      console.log(product);
      const find = state.cart.find((el) => el.id_product === product.id_product);
      if (find) {
        find.quantity++;
        console.log(find.quantity);
      } else {
        const prod = { quantity: 1, ...product };
        console.log(prod);
        state.cart.push(prod);
      }
    },
    DELETE_FROM_CART(state, product, item) {
      const index = state.cart.indexOf(item);
      const find = state.cart.find((el) => el.id_product === product.id_product);
      if (find.quantity > 1) {
        find.quantity--;
      } else {
        state.cart.splice(index, 1);
        console.log(product.quantity);
        console.log(find.quantity);
        console.log(state.cart);
      }
    },
  },
  actions: {
    async get_userSearch({ commit }) {
      try {
        const { data } = await axios.get(' http://localhost:3000/products');
        console.log(data);
        commit('SET_userSearch', data);
      } catch (e) {
        console.log(e);
      }
    },
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(' http://localhost:3000/products');
        data.map((item) => {
          item.img = require(`@/assets/images/product/${item.img}`);
          return item;
        });
        commit('SET_PRODUCTS', data);
      } catch (e) {
        console.log(e);
      }
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    deleteFromCart({ commit }, product) {
      commit('DELETE_FROM_CART', product);
    },
  },
  modules: {},
});
