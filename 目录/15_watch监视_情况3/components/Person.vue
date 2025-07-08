<template>
    <div class="person">
        <h1>情况3：监视reactive定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { reactive,watch } from 'vue';

    //data
    let person = reactive({
        name: '张三',
        age: 18,
    });

    //methods
    function changeName() {
        person.name +='~'
    }
    function changeAge() {
        person.age += 1
    }
    function changePerson() {
        // person = reactive({name: '李四', age: 90})
        Object.assign(person, { name: '李四', age: 90 })
    }


    //watch
    //情况3：监视reactive定义的对象类型数据,且默认开启深度监视
    watch(person,(newVal,oldVal)=>{
        console.log('person变化了',newVal,oldVal);
        
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