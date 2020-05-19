import axios from "./axios";

export function getCategory() {
    return axios({
        url:'booking/getCategory',
        params:{

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
            type,  cateogryId,  money, picture, remark
        }
    })
    
}

export function upload(file) {
    return axios({
        url: 'booking/upload.do',
        method:'post',
        headers:{
            "Content-Type": "multipart/form-data"
        },
        data:file

    })

}
export function upLoadImage(file) {
    return axios({
        url: 'booking/image.do',
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data: file

    })
}

export function addCategory(name) {
    return axios({
        url:'booking/addCategory',
        params:{
            name
        }
    })

}

export function delCategory(categoryId) {
    return axios({
        url:'booking/delCategory',
        params:{
            categoryId
        }
    })

}

