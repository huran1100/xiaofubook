import axios from "./axios";

export function getCategory(userId) {
    return axios({
        url:'booking/getCategory',
        params:{
            userId
        }
    })

}

export function getCompanion(accountId) {
    return axios({
        url: 'booking/getCompanion',
        params:{
            accountId
        }

    })
    
}

export function booking( spendTime,  userId,  spendUserId,accountId,
     type,  cateogryId,  money,picture,  remark) {
    return axios({
        url: 'booking/booking',
        params:{
            spendTime,  userId,  spendUserId,accountId,
            type,  cateogryId,  money,  remark
        }
    })
    
}

export function upload(file) {
    return axios({
        url: 'booking/upload.do',
        method:'post',
        params:{
            file
        }

    })

}