console.log('router ');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter({
    mode:'hash',
    routes:[
        {path:'*',component:()=>import('../views/error')},
        {path:'/',redirect:'/home'},
        {path:"/home",component:()=>import('@/views/home')},
        {path:'/login',component:()=>import('@/views/login')},
        {path:'/register',component:()=>import('@/views/register')},
        {path:'/shopCar',component:()=>import('@/views/shopCar'),meta:{
          auth:true
        }},
        {path:'/detail',component:()=>import('@/views/detail'),meta:{
          auth:true
        }}
    ],
    linkActiveClass:'y-link-active',
    linkExactActiveClass: "y-exact-link"
}
)

export default router
/*
新郑路由对象配置两种方式：
1：routes数组中添加对象 
2：router.addRouters 添加子路由  ？？？？
  注意错误404 在最底部

*/