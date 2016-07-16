import NewsList from './components/NewsList'
import NewDetail from './components/NewDetail'

export default function(router) {
	router.map({
	    '/list': {
	        component: NewsList
	    },
	    '/new/:id': {
	        component: NewDetail
	    }
	})
}