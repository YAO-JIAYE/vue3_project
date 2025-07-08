<template>
    <!-- 务必看懂下面这行代码 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2> -->
    <!-- <Person a="哈哈" b="嘻嘻" :list="personList"/> -->
    <Person a="哈哈" b="嘻嘻"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue' // 导入Person组件
    import {reactive} from 'vue'
    import {type Persons} from '@/types'

    let x = 9

    let personList = reactive<Persons>([
        {id:'sidoaswnd01',name:'张三',age:18},
        {id:'sidoaswnd02',name:'李四',age:20},
        {id:'sidoaswnd03',name:'王五',age:24},
    ])

    console.log(personList);
    
</script>