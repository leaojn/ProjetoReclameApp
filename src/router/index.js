import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
import reclamar from '@/components/reclamar';
import ranking from '@/components/ranking';

Vue.use(Router)

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
	}
	]

}
)
