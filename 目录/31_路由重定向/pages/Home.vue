<template>
    <div>
        <div class="home">
            <h1>欢迎来到Vue3</h1>
        </div>
    </div>
</template>
<script lang="ts" setup name="Home">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    // onMounted(()=>{
    //     setTimeout(()=>{
    //         //在此处编写一段代码，让路由实现跳转            
    //         router.push('/news')
    //     },3000)
    // })
</script>
<style scoped>
    
</style>