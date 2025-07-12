<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{money}}</h4>
    <h4>车：{{car.brand}} price: {{car.price}}</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import  {ref,provide} from 'vue'


  let money = ref(100)
  let car = ref({
    brand: '宝马',
    price: 100
  })

  function updateMoney(num: number){
    money.value += num
  }


  //向后代提供数据
  provide('moneyContext',{money,updateMoney})
  provide('car',car)

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>