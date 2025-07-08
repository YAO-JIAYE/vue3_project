<template>
    <Person ref="ren" />
    <button @click="testRen">测试</button>

</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue' // 导入Person组件
    import { ref } from 'vue' // 导入ref函数

    let ren = ref()

    function testRen() {
        console.log(ren.value);
        console.log(ren.value.a);
        console.log(ren.value.b);  
        console.log(ren.value.c);
    }
</script>