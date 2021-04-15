/**
 *  Created by yanqi on 21/04/12.
 * 对localStorage 操作的二次封装
 * 进阶：将localstorage变为相应是数据...
 */

export function getItem(key){
    return localStorage.getItem(key)
}
export function setItem(key,value){
    return localStorage.setItem(key,value)
}
export function removeItem(key){
    return localStorage.removeItem(key)
}
export function clear(){
    return localStorage.clear()
}