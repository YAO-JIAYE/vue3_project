<template>
    <div class="count">
        <h2>当前求和为:{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref } from 'vue'
    import { useCountStore } from '@/store/count';
    //data
    let n = ref(1)  //用户选择的数字
    const countStore = useCountStore()  //使用count store

    //methods
    function add() {
        //第一种方法修改数据
        // countStore.sum += n.value
        // 第二种方法修改数据
        // countStore.$patch({
        //     sum: countStore.sum + n.value,
        //     address: '上海'
        // })
        //第三种方法修改数据
        countStore.increment(n.value)
    }
    function minus() {
        countStore.sum -= n.value
    }


</script>

<style scoped>
.count {
    background: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>