import { NewsResource,NewsIdResource,NewsDateResource, NewsInfoResource, TopicsResource,TopicsIdResource } from './resource'

export default {
	getNews() {
		return NewsResource.get()
	},
	getNewsById(id) {
		return NewsIdResource.get({id: id})
	},
	getNewsByDate(date) {
		return NewsDateResource.get({date: date})
	},
	getNewsInfoById(id) {
		return NewsInfoResource.get({id: id})
	},
	getTopics() {
		return TopicsResource.get()
	},
	getTopicsById(topicid) {
		return TopicsIdResource.get({topicid: topicid})
	}
}