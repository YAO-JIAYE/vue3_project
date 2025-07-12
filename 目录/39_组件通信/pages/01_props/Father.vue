<template>
  <div class="father">
    <h3>父组件</h3>
	<h4>汽车：{{ car }}</h4>
	<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
	<Child :f_car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from 'vue'
	
	//data
	let car = ref("宝马")
	let toy = ref('')

	//methods
	function getToy(val:string){
		console.log('父亲收到了',val);
		toy.value = val
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>