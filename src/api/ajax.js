// ajax请求函数
// 异步返回的数据是：response.data
// 外面再包一层Promise 直接返回结果
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
    // 直接返回data
    return new Promise((resolve, reject) => {
        let promise
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' // 拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        // 返回response
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}