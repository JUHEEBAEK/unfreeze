<template>
  <div class="game__list">
    <router-link to="/themeView">
      <div class="game__item">
        <span>초성 게임</span>
      </div>
    </router-link>
    <router-link to="/themeView">
      <div class="game__item">
        <span>4자 말하기</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class GameView extends Vue {}
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
    background-color: #e9f1ff;
    // background-color: #f3f4f4;
    // border: solid 1px #e9f1ff;
    border-radius: 10px;
    margin: 12px;
    width: 50%;
    height: 164px;
    box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.5),
      15px 15px 15px rgba(0, 0, 0, 0.05);
    &:nth-child(2) {
      box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.5),
        15px 15px 15px rgba(0, 0, 0, 0.05),
        inset 4px 4px 5px rgba(255, 255, 255, 0.8),
        inset 4px 4px 5px rgba(0, 0, 0, 0.05), 8px 50px 5px rgba(0, 0, 0, 0.05);
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
  }
}
</style>
