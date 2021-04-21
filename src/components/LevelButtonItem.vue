<template>
  <div class="level__item" v-for="(level, index) in levels" :key="index">
    <router-link
      class="area__full"
      :to="`/game/${idfGame}/theme/${themeValue}/level/${level}`"
    >
      <span class="item__text">{{ level }} 단계</span>
    </router-link>
  </div>
</template>

<script lang="ts" src="./LevelButtonItem.ts"></script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.level__item {
  display: flex;
  align-items: center;
  // justify-content: center;
  background-color: #ecf0f3;
  border-radius: 12px;
  margin: 8px;
  width: 60vmin;
  height: 50px;
  // width: 20vmin;
  // height: 8vmin;
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
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
  font-family: sans-serif;
}
</style>
