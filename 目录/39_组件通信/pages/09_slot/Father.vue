<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <category title="热门游戏列表">
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
      </category>
      <category title="今日美食城市">
         <img :src="imgURL" alt="" srcset="">
      </category>
      <category title="今日影视推荐">
        <video :src="viewURL" controls></video>
      </category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue';
import { ref, reactive } from 'vue';
let games = reactive([
        {id:'asdiaosdo01',name:'英雄联盟'},
        {id:'asdiaosdo02',name:'王者荣耀'},
        {id:'asdiaosdo03',name:'绝地求生'},
    ])

    let imgURL = ref('https://i.ytimg.com/vi/TrwM4Ik6LjQ/maxresdefault.jpg')
    let viewURL = ref('https://www.youtube.com/watch?v=0ZGmxEvCfFE')

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>