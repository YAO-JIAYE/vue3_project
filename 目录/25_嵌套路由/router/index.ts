//创建一个路由器，暴露出去

//引入createRouter
import { createRouter,createWebHistory } from "vue-router";
//引入一个个可能呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";


//创建路由器
const router =  createRouter({
    history:createWebHistory(), //路由器的工作模式
    routes:[ //一个个路由规则
        {
            path:"/home",
            name:"zhuye",
            component:Home
        },
        {
            path:"/news",
            name:"xinwen",
            component:News,
            children:[
                {path:'detail',component:Detail}
            ]
        },
        {
            path:"/about",
            name:"guanyu",
            component:About
        }
    ]
})

export default router;
