const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
const week = ['一', '二', '三', '四', '五', '六', '日']
export default (value) => {
	// 九月 18日 星期日
	let year = value.substr(0, 4)
	let month = parseInt(value.substr(4, 2)) - 1
	let day = value.substr(6, 2)
	var date = new Date(year, month, day)
	let date_year = date.getMonth()
	let date_day = date.getDate()
	let date_week = date.getDay()
	return `${months[date_year]}月 ${date_day}日 星期${week[date_week ? date_week - 1 : 6]}`
}

        