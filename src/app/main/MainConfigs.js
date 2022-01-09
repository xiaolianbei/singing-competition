import error404 from './errors/404';
import home from './home/HomeController';
import list from './list/ListController';


const Config = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/home',
			component: home
		},
		{
			path: '/list',
			component: list
		},
		{
			path: '/errors/404',
			component: error404
		}
	]
};

export default Config;
