const defaultState = {
  name: "",
  email: "",
  sub: "",
  role: "",
  clientsGroup: {},
  userId: "",
  userInput:{}
};
export default {
  namespaced: true,
  state: defaultState,
  mutations: {
    set(state, user) {
      Object.keys(user).map(key => {
        state[key] = user[key];
      });
    },
    init(state) {
      Object.assign(state, defaultState);
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setClientsGroup(state, input) {
      state.clientsGroup = { ...input };
    },
    setUserInput(state,input) {
      state.userInput = { ...input };
    }
  }
};
