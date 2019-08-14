import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import store from './store'

Vue.use(Router);
Vue.config.productionTip = false;

let vue = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
});

export default vue;
