<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>        
    </div>
</template>
<script>
export default {
    name: 'Person',
    setup() {
        //consol.log(this); setup函数里的this是undefined,vue3中已经弱化了this
        //数据data
        let name = '张三';  //此时这三个数据不是响应式的
        let age = 18;
        let tel = '13812345678';

        //方法
        function changeName(){
            name = "zhang-san";//这样修改数据，页面是没有变化的
            console.log(name);//name确实改了，但name不是响应式的
        }
        function changeAge(){
            age+=1;
        }
        function showTel(){
            alert(tel);
        }

        return {
            name,age,changeName,changeAge,showTel
        }
        //setup的返回值也可以是渲染函数
        // return ()=> '哈哈'
    }
}
</script>

<style>
    .person {  
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    
</style>