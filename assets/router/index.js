import Router from 'vue-router';
import registrator from './registrator';
import store from '../store';

const Login = () => import('../components/Login');

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters['user/isAuthenticated']) {
		next();
		return;
	}
	next('/login');
};

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		beforeEnter: ifNotAuthenticated,
	},
];

export default new Router({
	routes: routes.concat(registrator)
});