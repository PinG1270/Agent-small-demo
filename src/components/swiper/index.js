/**
 * 给予组件库的二次封装？ 建议只用一个
 * 因为 如果使用多个，ui库 更新维护了；你也需要更新维护多个
 * 因为 ui的样式，有时候不能满足需求。但是可以解决某些问题；需要二次封装。重构样式
 */
import { Carousel,Icon } from 'ant-design-vue'
import swiper from './swiper.vue'
export default {
    install(Vue){
        Vue.use(Carousel);
        Vue.use(Icon)
        Vue.component('YSwiper',swiper)
    }
}