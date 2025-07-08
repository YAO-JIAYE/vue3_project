<template>
    <div class="person">
        <h2>当前求和为{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>

        <img v-for="dog,index in dogList" :key="index" :src="dog">
        <button @click="getDog">再来一只小狗</button>

    </div>
</template>

<script setup lang="ts" name="Person">
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

    const {sum,add} = useSum()
    const {dogList,getDog} = useDog()

    
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

    img{
        height: 100px;
        margin: 10px;
    }
    
</style>