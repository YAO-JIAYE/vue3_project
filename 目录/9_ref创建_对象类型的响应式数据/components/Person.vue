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

    </div>
</template>

<script setup lang="ts" name="Person">
    //导入
    import {ref,reactive} from 'vue';
    //数据
    let car = ref({brand:'奔驰',price:100});
    let games = ref([
        {id:'asdjioweqw01',name:'王者荣耀'},
        {id:'asdjioweqw02',name:'绝地求生'},
        {id:'asdjioweqw03',name:'英雄联盟'}
    ])



    //方法
    function changePrice() {
        car.value.price += 10;
        console.log(car);
        
    }
    function changeFirstName() {
        games.value[0].name = '流星蝴蝶剑';
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