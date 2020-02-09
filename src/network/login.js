import axios from "./axios";

export function userLogin(username,password){
    return axios({
        url:'/user/login',
        params: {
            username,
            password
        }
    })
}

export function userRegister(nickname,username, password,email) {
    return axios({
        url:'/user/register.do',
        method:'post',
        params:{
            nickname,
            username,
            password,
            email
        }
    })


}