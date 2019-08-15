import api from '../services/api';
import router from '../router';
import jwtDecode from 'jwt-decode';


const state = {
	authStatus: false,
	token: ''
};
const mutations = {
	SET_TOKEN: (state, token) => {
		localStorage.setItem('user-token', token);
		state.token = token;
	},
	SET_AUTH_STATUS: (state, status) => {
		state.authStatus = status
	},
};
const getters = {
	isAuthenticated: state => !!state.token,
};
const actions = {
	login({commit}, user) {
		return new Promise((resolve, reject) => {
			api
				.post('login_check', user)
				.then(response => {
					commit('SET_TOKEN', response.token);
					commit('SET_AUTH_STATUS', true);
					resolve();
				})
				.catch(error => {
					reject(error)
				});
		});
	},
	logout({commit}) {
		localStorage.removeItem('user-token');
		commit('SET_AUTH_STATUS', false);
		commit('SET_TOKEN', '');
		router.push('/login');
	},
	setToken({commit}){
		let token = localStorage.getItem('user-token') || '';
		commit('SET_TOKEN', token);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};