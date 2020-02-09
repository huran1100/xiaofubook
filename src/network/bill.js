import axios from "./axios";

export function getBillList(accountId,spendTime,pageSize) {
    return axios({
        url: 'booking/getBill.do',
        params:{
            accountId,
            spendTime,
            pageSize

        }
    })

}