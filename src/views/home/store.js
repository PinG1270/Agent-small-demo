import { getShopList } from './api.js'
export default {
    namespace: "home",
    namespaced: true,
    state: {
        shopList: []
    },
    actions: {
        // 1:actions中发送请求
        // 2:获取响应后，触发mutations 更改state
        getShopList_: async function (store,options) {
            console.log('options============',options);
            let data = await getShopList(options);
            store.commit('GETSHOPLIST',data)
        }
    },
    mutations: {
        GETSHOPLIST: async function (state,data) {
            state.shopList = data
        }
    },
    getters: {
        shopList:async state=>{
            // 当前模块中state
            console.log(state,'======================')
            return state.shopList
    
        }
    }
}