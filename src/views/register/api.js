import request from '@/utils/request.js';

export async function register(options){
    return request.get(options)
}