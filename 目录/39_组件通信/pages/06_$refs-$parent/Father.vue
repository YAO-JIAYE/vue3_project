<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">点我把child1的玩具修改</button>
		<button @click="changeComputer">点我把child2的电脑修改</button>
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue';
	import Child2 from './Child2.vue';
	import { ref } from 'vue';
	

	//data
	let house = ref(4)
	let c1 = ref()
	let c2 = ref()

	function changeToy() {
		c1.value.toy = '小猪佩奇'
	}

	function changeComputer() {
		c2.value.coumputer = '华为'
	}

	function getAllChild(refs:any) {
		for (const key in refs) {
			console.log(refs[key]);
			refs[key].book += 3
		}		
	}

	defineExpose({house})
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

