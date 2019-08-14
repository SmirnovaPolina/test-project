import api from '../services/api';
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
const getters = {};
const actions = {
	auth({commit}, user){
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
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};