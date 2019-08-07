import Router from 'vue-router';
const HelloWorld = () => import('../components/HelloWorld');

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: HelloWorld
	}
];

export default new Router({
	routes: routes
});