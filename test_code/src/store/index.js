import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import comment from './modules/comment';


export const store = new Vuex.Store({
	modules: {
		menu,
		comment,
	},
	strict: process.env.NODE_ENV !== 'production'
});