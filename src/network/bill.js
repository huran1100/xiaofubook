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