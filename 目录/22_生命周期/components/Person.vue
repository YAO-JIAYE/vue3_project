<template>
    <div class="person">
        <h2>当前求和为{{sum}}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

    let sum = ref(0)

    function add() {
        sum.value += 1
    }

    //创建
    console.log("创建");

    //挂载前
    onBeforeMount(()=>{
        console.log("挂载前");
        
    })

    //挂载完毕
    onMounted(()=>{console.log("子---挂载完毕");
    })

    //更新前
    onBeforeUpdate(()=>{
        console.log("更新前");
    })

    //更新完毕
    onUpdated(()=>{
        console.log("更新完毕");
    })

    //销毁前
    onBeforeUnmount(()=>{
        console.log("销毁前");
    })

    //销毁完毕
    onUnmounted(()=>{
        console.log("销毁完毕");
    })
    
</script>
<style scoped>
    .person {  
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    li{
        font-size: 20px;
    }
    
</style>