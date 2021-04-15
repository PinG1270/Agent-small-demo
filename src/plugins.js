// 在同一个项目中使用多个UI库。注意 同一模块中，因为相同组件变量名字重复问题。
import vue from 'vue'
// 按需导入
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // antdesigin CSS
import search from './components/search/index.js'
import swiper from './components/swiper/index.js'
vue.use(Button)
vue.use(search)
vue.use(swiper)

// 解决：两个ui库 变量名字重复问题
// 仙剑js文件；存放elmentui 按需导入