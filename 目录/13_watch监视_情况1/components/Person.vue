<template>
    <div class="person">
        <h1>情况1：监视ref定义的基本类型数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
        
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref,watch } from 'vue';
    //data
    let sum = ref(0);

    //methods
    function changeSum() {
        sum.value++;
    }

    //watch
    //情况1：监视ref定义的基本类型数据
    const stopWatch = watch(sum,(newval,oldval)=>{
        console.log('sum变化了','newval:',newval,'oldval:',oldval);
        if (newval>=10){
            stopWatch();
            console.log("停止监视");
            
        }
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