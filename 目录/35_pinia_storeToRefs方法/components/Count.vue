<template>
    <div class="count">
        <h2>当前求和为:{{ sum }}</h2>
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
    import { ref, toRefs } from 'vue'
    import { useCountStore } from '@/store/count';
    import { storeToRefs } from 'pinia';
    //data
    let n = ref(1)  //用户选择的数字
    const countStore = useCountStore()  //使用count store
    //用这个方法代价很大，会将countStore的所有属性都转化为响应式的，会导致性能下降
    // const { sum } = toRefs(countStore)
    //storetoRefs只会关注store中的数据，不会对方法进行ref包裹
    const {sum} = storeToRefs(countStore)

    //methods
    function add() {
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