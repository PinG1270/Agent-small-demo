import request from '@/utils/request.js'

export async function login(option){
    return request.get(option)
}