import Router from 'vue-router';
const HelloWorld = () => import('../components/HelloWorld');
const Login = () => import('../components/Login');

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: HelloWorld
	},
	{
		path: '/login',
		component: Login
	},
];

export default new Router({
	routes: routes
});