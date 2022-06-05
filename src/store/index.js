import Vue from 'vue';
import Vuex from 'vuex';
import Rate from './modules/Rate';
import Chat from './modules/Chat';
// vuex модули 
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        Rate,
        Chat,
    },
});