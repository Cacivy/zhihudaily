import NewsList from './components/NewsList'
import NewDetail from './components/NewDetail'
import TopicList from './components/TopicList'
import SectionList from './components/SectionList'

export default function(router) {
	router.map({
		'/': {
			component: NewsList
		},
	    '/new/:id': {
	    	component: NewDetail
	    },
	    '/topic/:id': {
	    	component: TopicList
	    },
	    '/section/:id': {
	    	component: SectionList
	    }
	})
}