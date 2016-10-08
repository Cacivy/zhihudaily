import NewsList from './components/NewsList'
import NewDetail from './components/NewDetail'
import TopicList from './components/TopicList'
import SectionList from './components/SectionList'
import App from './App'

export default {
	routes: [
		{path: '/', component: NewsList},
		{path: '/new/:id', component: NewDetail},
		{path: '/topic/:id', component: TopicList},
		{path: '/section/:id', component: SectionList}
	]
}
