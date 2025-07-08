<template>
    <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue' // 导入Person组件
    import {ref,onMounted} from 'vue' // 导入ref函数

    let isShow = ref(true)

    //挂载完毕
    onMounted(()=>{console.log("父---挂载完毕");
    })
</script>