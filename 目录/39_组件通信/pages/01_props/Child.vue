<template>
  <div class="child">
    <h3>子组件</h3>
	玩具：{{toy }}
	父组件传递的车：{{ f_car }}
	<button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue'
	import { defineProps } from 'vue';
	let toy = ref("奥特曼")

	//拿到从父亲给的props
	defineProps(['f_car','sendToy'])
	
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
