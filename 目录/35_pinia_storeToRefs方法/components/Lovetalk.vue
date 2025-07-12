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
    import { useLoveTalkStore } from '@/store/lovetalk';
    import { storeToRefs } from 'pinia';

    const lovetalkStore = useLoveTalkStore()
    const {talkList} = storeToRefs(lovetalkStore)

    //methods
    async function getTalk(){
        lovetalkStore.getATalk(talkList.value)        
        
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