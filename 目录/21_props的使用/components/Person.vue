<template>
    <div class="person">
        <h2>{{ a }}</h2>
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { defineProps,withDefaults }  from 'vue';
    import {type Persons} from '@/types'
    
    //只接收list
    // defineProps(['list'])

    //接收list，并限制类型
    // defineProps<{list: Persons}>()

    //接收list+限制类型+限制必要性+指定默认值
    withDefaults(defineProps<{list?: Persons,a:string}>(),{
        list:()=>[{id:'assodiasodsa01',name:'康师傅',age:19}]
    })

    //接收a，同时保存起来
    // let x = defineProps(['a','b','list'])
    // console.log(x.a);
    
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