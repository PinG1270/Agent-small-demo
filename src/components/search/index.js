import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Search from './Search.vue'
export default{
    install(Vue){
        Vue.use(Input);
        // search 注册为全局组件
        Vue.component('YSearch',Search)
    }
}