import { createWebHistory, createRouter} from 'vue-router'
// import ComingSoon from '../components/ComingSoon.vue'
import Home from '../components/views/home/home.vue'

// const Home = { template: '<div>Home</div>' }
const history	= createWebHistory();
const	router	=	createRouter({
	history,
	routes: [
		{
			path:	'/',
			component: Home
		}
	]
})

export default router;