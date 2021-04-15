import request from '@/utils/request.js'
/**
 * 获取商品列表数据
 * @param {Object} options url data 
 * @returns {Promise}
 */
export async function getShopList(options){
    console.log('api',options);
    return request.get(options)
}