//该文件专用于调接口获取数据
//1.导入axios包
import axios from 'axios'
//2.设置基础路径
axios.defaults.baseURL = '/api'; //
//3.引入参数处理模块
let qs = require('qs');
//声明一个名字为getNewsList的函数,params值函数中的参数
//export导出
/* export const getUserProjectList = (params) => {
    //params是参数对象，qs会对参数对象进行处理
    return axios
        .post("?m=Api&c=Project&a=getUserProjectList", qs.stringify(params))
        .then(res => res.data)
}; */
/* export const getItemList = (params) => {
    //params是参数对象，qs会对参数对象进行处理
    return axios
        .get("http://www.xg_wh.com/Home/Ceshi/get_films", qs.stringify(params))
        .then(res => res.data)
};
export const getPages = (params) => {
    //params是参数对象，qs会对参数对象进行处理
    return axios
        .post("http://www.xg_wh.com/Home/Ceshi/get_films", qs.stringify(params))
        .then(res => res.data)
}; */
export const getAreaList = (params) => {
    //params是参数对象，qs会对参数对象进行处理
    return axios
        .get("https://www.easy-mock.com/mock/5b34eb92ebbfd9014ce9ece4/api/area4/list", qs.stringify(params))
        .then(res => res.data)
};
export const getFriendsList = (params) => {
    //params是参数对象，qs会对参数对象进行处理
    return axios
        .get("https://www.easy-mock.com/mock/5b34eb92ebbfd9014ce9ece4/api/friends/list", qs.stringify(params))
        .then(res => res.data)
};
