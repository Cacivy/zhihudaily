import NewsList from './components/NewsList'
// import NewDetail from './components/NewDetail'

export default function(router) {
	router.map({
		'/': {
			component: NewsList
		},
	    '/new/:id': {
	    	component:function (resolve) {
	    		require(['./components/NewDetail'], resolve)
	    	}
	    },
	    '/topic/:id': {
	    	component:function (resolve) {
	    		require(['./components/TopicList'], resolve)
	    	}
	    },
	    '/section/:id': {
	    	component:function (resolve) {
	    		require(['./components/SectionList'], resolve)
	    	}
	    }
	})
}