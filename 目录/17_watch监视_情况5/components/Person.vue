<template>
    <div class="person">
        <h1>监视多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>

    </div>
</template>

<script setup lang="ts" name="Person">
    import {reactive,watch } from 'vue'

    //data
    let person = reactive({
        name: '张三',
        age: 18,
        car:{
            c1:'宝马',
            c2:'奔驰'
        }
    })

    //methods
    function changeName() {
        person.name += '~'
    }
    function changeAge() {
        person.age+=1
    }
    function changeC1() {
        person.car.c1 = '奥迪'
    }
    function changeC2() {
        person.car.c2 = '大众'
    }
    function changeCar() {
        person.car = {
            c1: '雅迪',
            c2: '爱玛'
        }
    }

    //watch
    watch([()=>person.name,()=>person.car.c1],(newVal,oldVal)=>{
        console.log('person.name or person.car.c1 变化了',newVal,oldVal);
        
    },{deep:true})


    
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