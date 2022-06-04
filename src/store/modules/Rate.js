import axios from 'axios'
export default {
  actions: {
    async getCurrencyRate(context) {
      try {
        const res = await axios
          .get(process.env.VUE_APP_ADDRESS)
          .then(res => (this.info = res));
        context.commit('GET_CURRENCY', res);
        return res;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    GET_CURRENCY(state, currency) {
      state.currency = currency;
      console.log('mutation is done', currency);
    },
  },
  state: {
    currency: [],
    info: [],
  },
  getters: {
    STATE(state) {
      return state;
    }

  },

};