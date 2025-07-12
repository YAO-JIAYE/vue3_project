<template>
	<div class="app">
		<h2>求和为{{ sum }}</h2>
		<h2>名字为:{{ person.name }} </h2>
		<h2>年龄为:{{ person.age }}</h2>
		<h2>车名：{{ car.name }} </h2>
		<h2>车颜色：{{ car.options.color }} </h2>
		<h2>车型号：{{ car.options.size }} </h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
		<button @click="changeCarName">修改车名</button>
		<button @click="changeCarColor">修改车颜色</button>
		<button @click="changeCar">修改整个车</button>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref,reactive,shallowRef,shallowReactive } from 'vue'
let sum = shallowRef(0)
let person = shallowRef({
	name: '张三',
	age: 20,
})
let car = shallowReactive({
	name: '奔驰',
	options:{
		color: '红色',
		size: 'v8',
	}
})

function changeSum(){
	sum.value += 1
}
function changeName(){
	person.value.name = '李四'
}
function changeAge(){
	person.value.age = 60
}
function changePerson(){
	person.value =  {
		name:'mike',
		age: 30,
	}
}
function changeCarName(){
	car.name = '宝马'
}
function changeCarColor(){
	car.options.color = '蓝色'
}
function changeCar(){
	Object.assign(car,{
		name: '奥迪',
		options:{
			color: '黑色',
			size: 'A8',
		}
	})
}
</script>

<style scoped>
.app{
	background: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;

}
</style>