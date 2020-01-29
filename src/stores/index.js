import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import UserModule from "./modules/user.module";
import AuthModule from "./modules/auth.module";
// import OrderFormModule from "./modules/orderForm.module";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: UserModule,
    auth: AuthModule
  },
  mutations: {},
  actions: {}
});
