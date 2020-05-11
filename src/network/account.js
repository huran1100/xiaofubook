import axios from "./axios";


export function addAccount(userId,name){
    return axios({
        url:'/account/addAccount.do',
        params: {
            userId,
            name
        }
    })
}

export function getAccount(accountId) {
    return axios({
        url:'/account/getAccount.do',
        params: {
            accountId
        }
    })

}

export function joinAccount(code) {
    return axios({
        url:'/account/joinAccount.do',
        params:{
            code
        }
    })

}

export function getUserAccount() {
    return axios({
        url:'/account/getUserAccount.do',

    })

}

export function changeAccount(accountId) {
    return axios({
        url:'/account/changeAccount.do',
        params:{
            accountId
        }

    })

}