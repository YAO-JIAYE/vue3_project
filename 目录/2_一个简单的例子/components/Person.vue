<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>        
    </div>
</template>
<script>
export default {
    name: 'Person',
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '13800138000'
        }
    },
    methods: {
        showTel() {
            alert(this.tel);
        },
        changeName() {
            this.name = 'zhang-san';
        },
        changeAge() {
            this.age += 1;
        }
    }
}
</script>

<style>
    .person {  
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    
</style>