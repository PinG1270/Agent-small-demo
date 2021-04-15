console.log('vuex store');
import vue from 'vue'
import Vuex from 'vuex'
import vuePluginModule from './vuePluginModule.js'
import home from '@/views/home/store.js'
import login from '@/views/login/store.js'
import createPersistedState from "vuex-persistedstate";

vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        isNavShow:true
    },
    modules:{
        [home.namespace]:home,
        [login.namespace]:login,
    },

    plugins:[
        vuePluginModule,
        function(store){
            console.log('vuex---store======',store);
        },
        createPersistedState({
            paths:['login'],
            storage:window.localStorage
        })
    
    ]
})

export default store


/*
vuex 中注册的模块两种方式
1: store.modules.myModule = {}
2: store.registreModule('myModule',{})

*/