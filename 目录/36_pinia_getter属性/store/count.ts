import { defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
    //真正存储数据的地方
    state(){
        return{
            sum:6,
            address:'hangzhou'
        }
    },
    //actions里面放置的是一个个动作函数，用于响应组件中的动作
    actions:{
        increment(val:number){
            this.sum += val                        
        }
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        },
        upperSchool():string{
            return this.address.toUpperCase()
        }
    }
})