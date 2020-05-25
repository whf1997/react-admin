import ajax from "./ajax";
const baseUrl='http://39.100.123.237:8000/yzzs'
//登录
export const  reqLogin=(username,password)=>ajax(baseUrl+'/admin/login',{adminName:username,password:password},'POST')