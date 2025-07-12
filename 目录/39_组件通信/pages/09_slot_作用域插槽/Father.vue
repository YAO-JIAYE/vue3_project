<template>
  <div class="father">
    <h3>父组件</h3>
      <div class="content">
        <Game>
          <template v-slot="params">
            <ul>
              <li v-for="param in params.games" :key="param.id">{{ param.name }}</li>
            </ul>
          </template>
        </Game>
        <Game>
          <template v-slot="params">
            <ol>
              <li v-for="param in params.games" :key="param.id">{{ param.name }}</li>
            </ol>
          </template>
        </Game>
        <Game>
          <template v-slot:qwe="{games}">
            <h3 v-for="game in games" :key="game.id">{{ game.name }}</h3>
          </template>
        </Game>
      </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue';
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>