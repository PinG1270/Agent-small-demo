
import { login } from './api.js'
export default {
    namespace: "login",
    namespaced: true,
    state: {
        token: ''
    },
    actions: {
        async loginAction(store, options) {
            let data = await login(options);
            console.log(data, '==============');
            // 登录成功；1 将token 存到vuex中
            if (data.code == 1) {
                store.commit('LOGINMUTATION', data.token)
                // Vue.prototype.$message({
                //     type:'success',
                //     message:'登录成功'
                // })
                return true
            }else{
                
                // this.$message({
                //     type:'error',
                //     message:'登录失败'
                // })
                return false
            }
        }
    },
    mutations: {
        LOGINMUTATION(state, token) {
            state.token = token
        }
    },
    getters: {
    }
}