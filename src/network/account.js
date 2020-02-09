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
