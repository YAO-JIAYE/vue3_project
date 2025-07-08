<template>
    <div class="person">
        <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏的名字</button>
        <hr>
        <h2>测试对象：{{ obj.a.b.c }}</h2>
        <button @click="changeC">修改c</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    //导入
    import {ref,reactive} from 'vue';
    //数据
    let car = reactive({brand:'奔驰',price:100});
    let games = reactive([
        {id:'asdjioweqw01',name:'王者荣耀'},
        {id:'asdjioweqw02',name:'绝地求生'},
        {id:'asdjioweqw03',name:'英雄联盟'}
    ])

    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    //方法
    function changePrice() {
        car.price += 10;
        console.log(car.price);
        
    }
    function changeFirstName() {
        games[0].name = '流星蝴蝶剑';
    }

    function changeC() {
        obj.a.b.c = 999;
    }

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