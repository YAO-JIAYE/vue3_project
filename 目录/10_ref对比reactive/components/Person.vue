<template>
    <div class="person">
        <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    //导入
    import {ref,reactive, Suspense} from 'vue';
    //数据
    let car = ref({brand:'奔驰',price:100});
    let sum = ref(0);

    //方法
    function changePrice() {
        car.value.price += 10;
        
    }
    function changeBrand() {
        car.value.brand = '宝马';
    }
    function changeCar() {
        // car = reactive({brand:'保时捷',price:200}) 这么写页面是不更新的
        // Object.assign(car,{brand:'保时捷',price:200})

        car.value = {brand:'保时捷',price:200}
    }

    function changeSum() {
        sum.value += 1;
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