<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot name="qwe" :games="games"></slot>
    </div>
</template>

<script setup lang="ts" name="Game">
import {reactive,ref} from 'vue'
let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>

<style scoped>
.game{
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
h2{
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>