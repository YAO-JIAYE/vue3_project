<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a:{{ a }}, b:{{ b }}, c:{{ c }}, d:{{ d }}</h4>
		<button @click="updateA(6)">点我将爷爷那的a更新</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a','b','c','d','updateA'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>