import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
import reclamar from '@/components/reclamar';
import Auth from '@/components/Auth';
import AuthSucess from '@/components/AuthSuccess';
import ranking from '@/components/ranking';
import rankingDriver from '@/components/rankingDriver';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Router)
Vue.use(Vuex);
Vue.use(axios);

export default new Router({
	mode: 'history',
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
		path:'/ranking-motoristas',
		name: 'ranking-motoristas',
		component: rankingDriver
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

