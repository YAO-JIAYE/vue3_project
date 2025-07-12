<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age++">修改年龄</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref, toRaw } from 'vue'
	let person = ref({
		name:'tony',
		age:18
	})

	let person2 = toRaw(person.value)

	
</script>

<style scoped>
.app{
	background: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;

}
</style>