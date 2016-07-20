import NewsList from './components/NewsList'
// import NewDetail from './components/NewDetail'

export default function(router) {
	router.map({
		'/list': {
			component: NewsList
		},
	    // '/new/:id': {
	    //     component: NewDetail
	    // }
	    '/new/:id': {
	    	component:function (resolve) {
	    		require(['./components/NewDetail'], resolve)
	    	}
	    },
	    '/topic/:id': {
	    	component:function (resolve) {
	    		require(['./components/TopicList'], resolve)
	    	}
	    }
	})
}