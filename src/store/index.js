// Have store, keep record of users own exchanges
// Store main info in Local storage so dont have to redo
// Just upload csvs
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
// accounts are name and addresses(since exchanges have multiple)
// {name: "binance", addresses[]}
// and attached withdrawal, deposit, trades
  state: {
    accounts: ["test account"]
  },
  actions: {
    UPDATE_ACCOUNT: ({ commit }, updatedAccount, index) => {

    	commit("SET_ITEMS", { account: updatedAccount, index:index})
    },
    ADD_ACCOUNT: ({ commit }, newAccount) => {
    	commit("SET_ITEMS", { account: newAccount})
    },
  },
  mutations: {
    UPDATE_ACCOUNT: (state, { account, index }) => {
      state.accounts[index] = account
    },
    ADD_ACCOUNT: (state, { account }) => {
      state.accounts.push(account)
    }
  },
  getters: {
    // accounts: state => {
    //   return state.accounts;
    // }
  }
})
export default store;