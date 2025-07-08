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
            path:"/",
            //重定向
            redirect:{name:"zhuye"}
        }
        ,
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
                {
                    name:'xiangxi',
                    path:'detail',component:Detail,
                    //第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props:true
                    //第二种写法（函数写法）: 可以自己决定将什么作为Props给路由组件
                    props(route){
                        return route.query;                        
                    }
                    //第三种写法（对象写法）
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
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
