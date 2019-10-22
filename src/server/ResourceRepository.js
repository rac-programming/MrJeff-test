import Repository from "./Repository"

const resource = "/apps/orders/search";

export default{
    get(endpoint){
        return Repository.get(`${resource}/${endpoint}`)
    },

    post(endpoint, data){
        return Repository.post(`${resource}/${endpoint}`, data)
    }
}