<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-modol用在组件标签上 -->
    <!-- <Input v-model="username"></Input> -->
    <!-- <Input :modelValue="username" @update:modelValue="username = $event"/> -->
    <!-- 修改modelValue -->
    <Input v-model:ming="username" v-model:mima="password"></Input>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from 'vue'
  import Input from './Input.vue';
  //data
  let username = ref('zhangsan')
  let password = ref('123456')

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
