import Vuex from 'vuex';
import Vue from 'vue';
import user from './user';

Vue.use(Vuex);

const modules = {
	user,
};

export default new Vuex.Store({
	modules
});