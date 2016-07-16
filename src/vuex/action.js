import api from '../api/index'

export const ADD_NEWSCounter = function({ dispatch }, news) {
	dispatch('ADD_NEWS', news)
}

function makeAction (type) {
	return ({ dispatch }, ...args) => dispatch(type, ...args)
}

//获取当日热闻
export const getNews = ({dispatch, state}) => {
	//更新缓存
	api.getNews().then(res => {
		if(res.ok){
			let news= JSON.parse(res.data)
			dispatch('UPDATE_NEWS', news)
		}
	})
}
//主题日报缓存
export const getTopics = ({dispatch}) => {
	api.getTopics().then(res => {
		if(res.ok){
			let topics= JSON.parse(res.data)
			dispatch('ADD_TOPICS', topics.others)
		}
	})
}
//获取文章
export const getPost = ({dispatch, state}, id) => {
	let post= state.posts.find(p=>p.id == id);
	if(!post){
		api.getNewsById(id).then(res => {
			let post= JSON.parse(res.data)
			//获取相关信息
			api.getNewsInfoById(id).then(res2 => {
			  if(res2.ok){
			    let obj= JSON.parse(res2.data)
			    //属性赋值
			    for (let item in obj) {
			      if ({}.hasOwnProperty.call(obj, item)) {
			        post[item] = obj[item]
			      }
			    }
			    dispatch('ADD_POSTS', post)
			  }
			})
		})
	}
}