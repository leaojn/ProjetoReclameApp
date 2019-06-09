import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
import reclamar from '@/components/reclamar';
import Auth from '@/components/Auth';
import AuthSucess from '@/components/AuthSuccess';
import ranking from '@/components/ranking';
import Vuex from 'vuex';

Vue.use(Router)
Vue.use(Vuex);

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path:'/reclamar',
		name: 'blog',
		component: reclamar
	},
	{
		path:'/ranking',
		name: 'ranking',
		component: ranking
	},
	{
		path:'/auth',
		name:'Auth',
		component: Auth
	},
	{
		path:'/success',
		name:'sucess',
		component: AuthSucess
	}
	]

}
)

