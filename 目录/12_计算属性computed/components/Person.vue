<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        <button @click="changeFullName">将全名改为李-四</button>
        全名：<span>{{fullName}}</span>
        
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref,computed } from 'vue'
    let firstName = ref('张')
    let lastName = ref('三')
    
    //这么定义的fullName，是一个计算属性，是只读的
    // let fullName = computed(() => {
    //     return `${firstName.value}-${lastName.value}`
    // })

    //这么定义的fullName，是一个计算属性，是可读写的
    let fullName = computed({
        get(){
            return `${firstName.value}-${lastName.value}`
        },
        set(val){
            // console.log('set fullName',val)
            const [str1,str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName(){
        fullName.value = '李-四'
    }
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