import { NewsResource,NewsIdResource,NewsDateResource,TopicsResource,TopicsIdResource } from './resource'

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
	getTopics() {
		return TopicsResource.get()
	},
	getTopicsById(topicid) {
		return TopicsIdResource.get({topicid: topicid})
	}
}