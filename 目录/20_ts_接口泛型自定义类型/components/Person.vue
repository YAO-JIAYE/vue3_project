<template>
    <div class="person">
        ???
    </div>
</template>

<script setup lang="ts" name="Person">
    import {type PersonInter,type Persons} from '@/types'
    let person: PersonInter = {id:'2312asdiasdiw',name:'张三',age:60}

    let personList: Persons = [
    {id:'2312asdiasdiw01',name:'张三',age:60},
    {id:'2312asdiasdiw02',name:'李四',age:17},
    {id:'2312asdiasdiw03',name:'王五',age:5}
    ]
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