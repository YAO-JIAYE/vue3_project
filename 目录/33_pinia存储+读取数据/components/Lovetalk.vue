<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Lovetalk">
    import {reactive} from 'vue'
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import { useLoveTalkStore } from '@/store/lovetalk';

    const lovetalkStore = useLoveTalkStore()
    const talkList = lovetalkStore.talkList

    //methods
    async function getTalk(){
        //发请求,下面这行的写法是连续解构赋值+重命名
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串包装成对象
        let obj = {id:nanoid(),title}
        //放到数组中
        talkList.unshift(obj)        
        
    }
</script>

<style scoped>
.talk{
    background: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>