<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
               <router-link :to="{path:'/news/detail'}">{{ news.title }}</router-link>
            </li>
        </ul>
        <!-- 展示区 -->
         <div class="news-content">
            <router-view></router-view>
         </div>
    </div>
</template>
<script lang="ts" setup name="News">
    import { reactive } from 'vue';
    const newsList = reactive([
        {id:"01",title:'一种抗癌食物',content:'西兰花'},
        {id:"02",title:'如何一夜暴富',content:'学it'},
        {id:"01",title:'震惊！万万没想到',content:'明天是周一'},
        {id:"01",title:'好消息!好消息!',content:'快放暑假了'},

    ])
</script>
<style scoped>
    a{
        color:green;
        text-decoration:none;
        font-size:18px;
        font-weight:bold;
        padding: 10px;
    }
    ul li{
        list-style:none;
        margin-bottom:10px;
    }
    .news-content{
        padding:20px;
        border:1px solid #ccc;
        border-radius: 5px;
        margin: 20px 20px;
    }
</style>