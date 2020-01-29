const defaultState = {
  email: ""
};
export default {
  namespaced: true,
  state: defaultState,
  mutations: {
    set(state, email) {
      state.email = email;
    },
    init(state) {
      Object.assign(state, defaultState);
    }
  }
};
