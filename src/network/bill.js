import axios from "./axios";

export function getBillList(accountId,spendTime,currPageNo,pageSize) {
    return axios({
        url: 'booking/getBill.do',
        params:{
            accountId,
            spendTime,
            currPageNo,
            pageSize

        }
    })

}

export function getBillInfo(billId) {
    return axios({
        url: 'booking/getBillInfo.do',
        params:{
            billId
        }
    })

}