import moment from 'moment'
export default function(Vue) {
    moment.locale('zh-cn');
    //知乎图片403代理 
    Vue.filter('zhihuimg', function(value) {
            return value && value.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        })
        //知乎外链
    Vue.filter('zhihulink', function(value) {
            return value && unescape(value.replace(/https:\/\/link.zhihu.com\/\?target=/g, ''))
        })
        //moment
    Vue.filter('moment', function(value) {
        return value && moment(value, 'YYYYMMDD').format('MMMM Do dddd')

        // moment(value,'YYYYMMDD').calendar(null,{
        //     sameDay: '[Today]',
        //     nextDay: '[Tomorrow]',
        //     nextWeek: 'dddd',
        //     lastDay: '[Yesterday]',
        //     lastWeek: '[Last] dddd',
        //     sameElse: 'YYYY/MM/DD'
        // })
    })
}
