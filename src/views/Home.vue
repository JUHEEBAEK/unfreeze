<template>
  <div class="home">
    <router-link class="button__item" to="/game/list">게임 선택</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vmin;
  .button__item {
    width: 30vmin;
    height: 10vmin;
    border-radius: 12px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;

    &:hover {
      box-shadow: 8px 8px 32px #cbced1, -8px -8px 32px #ffffff;
    }
  }
}
</style>
