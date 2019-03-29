//Zhihu http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/news/latest
var config= {
    site: '104.224.185.87:3003',
    host: 'news-at.zhihu.com',
    method: 'GET'
}

export const API_ROOT=`/api/${config.method}?host=${config.host}&url=`
