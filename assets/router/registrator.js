import store from '../store';

const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */'../components/HelloWorld');

/* webpackChunkName: "registrator" */
const ifAuthenticated = (to, from, next) => {
	if (store.getters['user/isAuthenticated']) {
		next();
		return;
	}
	next('/login');
};

const components = [
	{
		path: '/home',
		component: HelloWorld,
		name: 'HelloWorld',
	},
];

function getRoute(component) {
	return {
		path: component.path,
		name: component.name,
		component: component.component,
		beforeEnter: ifAuthenticated
	};
}

export default components.map(component => {
	return getRoute(component);
});