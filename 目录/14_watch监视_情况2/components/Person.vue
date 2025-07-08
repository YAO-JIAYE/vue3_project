<template>
    <div class="person">
        <h1>情况2：监视ref定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref,watch } from 'vue';

    //data
    let person = ref({
        name: '张三',
        age: 18,
    });

    //methods
    function changeName() {
        person.value.name +='~'
    }
    function changeAge() {
        person.value.age += 1
    }
    function changePerson() {
        person.value = {name: '李四', age: 90}
    }


    //watch
    //情况2：监视ref定义的对象类型数据,监视的是对象的地址值,若想监视对象内部属性的变化，需要手动开启深度监视
    watch(person, (newVal, oldVal) => {
        console.log('person变化：', newVal, oldVal);
        
    },{deep:true,immediate:true})
    
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