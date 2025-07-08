<template>
    <!-- html -->

    <div class="app">

        <h1>你好啊!</h1>
        <Person />
    </div>

</template>

<script lang="ts">
import Person from './components/Person.vue' // 导入Person组件
// js Ts
export default {
    name: 'App', //组件名
    components: {
        Person // 注册Person组件
    }
}
</script>

<style>
/* css */ 
 .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
 }

</style>

