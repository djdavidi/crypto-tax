// Have store, keep record of users own exchanges
// Store main info in Local storage so dont have to redo
// Just upload csvs
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
// use vuex persisted state npm to store when close browser
// so no need for backend - allow toggle - default off?
const store = new Vuex.Store({
// accounts are name and addresses(since exchanges have multiple)
// {name: "binance", addresses[]}
// and attached withdrawal, deposit, trades
  state: {
    accounts: [{name:"test account1"},{name:"test account2"}, {name:"test account3"}]
  },
  actions: {
    UPDATE_ACCOUNT: ({ commit }, updatedAccount, index) => {
    	commit("UPDATE_ACCOUNT", { account: updatedAccount, index})
    },
    ADD_ACCOUNT: ({ commit }, newAccount) => {
    	commit("ADD_ACCOUNT", { account: newAccount})
    },
    REMOVE_ACCOUNT: ({ commit }, index) => {
    	commit("REMOVE_ACCOUNT", {index})
    }
  },
  mutations: {
    UPDATE_ACCOUNT: (state, { account, index }) => {
      state.accounts[index] = account
    },
    ADD_ACCOUNT: (state, { account }) => {
      state.accounts.push(account)
    },
    REMOVE_ACCOUNT: ({ commit }, index) => {
    	state.accounts.splice(index, 1)
    }
  },
  getters: {
    // accounts: state => {
    //   return state.accounts;
    // }
  }
})
export default store;