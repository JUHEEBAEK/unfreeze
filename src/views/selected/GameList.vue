<template>
  <div class="game__list">
    <div class="game__item">
      <router-link class="area__full" to="/themeList">
        <span class="item__text">초성 게임</span>
      </router-link>
    </div>

    <div class="game__item">
      <router-link class="area__full" to="/themeList">
        <span class="item__text">4자 말하기</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class GameList extends Vue {}
</script>

<style scoped lang="scss">
.game__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
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
    border-radius: 36px;
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
    font-size: 3.6vmin;
    font-weight: 500;
    font-style: normal;
    font-family: sans-serif;
  }
}
</style>
