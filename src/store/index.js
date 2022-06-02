import Vue from 'vue';
import Vuex from 'vuex';
import Rate from './modules/Rate';
// vuex модули 
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        Rate,
    },
});