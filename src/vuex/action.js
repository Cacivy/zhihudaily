import api from '../api/index'

export const ADD_NEWSCounter = function({ commit }, news) {
	commit('ADD_NEWS', news)
}

export const Loading = function({ commit }, state) {
	commit('LOADING', state)
}

function makeAction (type) {
	return ({ commit }, ...args) => commit(type, ...args)
}

export const addIndex = ({commit}) => {
	commit('ADD_INDEX')
}

//获取当日热闻
export const getNews = ({commit, state}) => {
	//更新缓存
	api.getNews().then(res => {
		if(res.ok){
			let news= JSON.parse(res.data)
			commit('UPDATE_NEWS', news)
		}
	})
}
//主题日报缓存
export const getTopics = ({commit}) => {
	api.getTopics().then(res => {
		if(res.ok){
			let topics= JSON.parse(res.data)
			commit('ADD_TOPICS', topics.others)
		}
	})
}
//栏目总览缓存
export const getSections = ({commit}) => {
	api.getSections().then(res => {
		if(res.ok){
			let sections= JSON.parse(res.data)
			commit('ADD_SECTIONS', sections.data)
		}
	})
}
//获取文章
export const getPost = ({commit, state}, id) => {
	let post= state.posts.find(p=>p.id == id);
	if(!post){
		api.getNewsById(id).then(res => {
			post= JSON.parse(res.data)
			//获取相关信息
			return api.getNewsInfoById(id)
		}).then(res2 => {
			if(res2.ok){
				let obj= JSON.parse(res2.data)
			    //属性赋值
			    for (let item in obj) {
			    	if ({}.hasOwnProperty.call(obj, item)) {
			    		post[item] = obj[item]
			    	}
			    }
			    commit('ADD_POSTS', post)
			}
		})
	}
}
//获取主题日报文章
export const getTopicPosts = ({commit, state}, id) => {
	api.getTopicsById(id).then(res => {
		let posts= JSON.parse(res.data)
		commit('ADD_TOPICPOSTS',posts)
	})
}
//获取栏目文字
export const getSection = ({commit}, id) => {
	api.getSectionsById(id).then(res => {
		if(res.ok){
			let section= JSON.parse(res.data)
			commit('ADD_SECTION', section)
		}
	})
}