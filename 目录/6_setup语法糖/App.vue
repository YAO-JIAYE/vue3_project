<template>
    <Person />

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