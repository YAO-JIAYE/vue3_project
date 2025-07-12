<template>
  <div class="child">
    <h3>子组件</h3>
	<h3>玩具：{{ toy }}</h3>
	<button @click="emit('send-toy',toy)">测试自定义事件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref,onMounted} from 'vue'
	let toy = ref('奥特曼')

	//申明事件
	const emit = defineEmits(['send-toy'])
	
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>