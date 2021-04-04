<template>
  <div class="game__item" v-for="(game, index) in games" :key="index">
    <router-link class="area__full" :to="`/game/${game.idfGame}/theme`">
      <span class="item__text">{{ game.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts" src="./Game.ts"></script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.game__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f3;
  border-radius: 24px;
  margin: 12px;
  width: 30vmin;
  height: 30vmin;
  /*
    box-shadow: y축  x축  가장자리 블러처리
    처음 오른쪽 아래쪽, 그 다음 왼쪽 위쪽
    */
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  &:hover {
    box-shadow: 8px 8px 32px #cbced1, -8px -8px 32px #ffffff;
  }
}
.item__text {
  // font-size: 3.6vmin;
  font-size: 2.8vmin;
  font-weight: 500;
  font-style: normal;
  font-family: sans-serif;
}
</style>
