
import Vuex from 'vuex';
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {
  ...commonActions,
  ...apiRequests,
}
// import Vue from 'vue';

// Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: '',
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;