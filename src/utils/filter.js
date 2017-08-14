export const zhihuimg = (value) => {
    return value // && value.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}

export const zhihulink = (value) => {
    return value && unescape(value.replace(/https:\/\/link.zhihu.com\/\?target=/g, ''))
}
