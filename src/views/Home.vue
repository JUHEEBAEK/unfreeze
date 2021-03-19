<template>
  <div class="home">
    <router-link class="button__item" to="/gameView">게임 선택</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheAppBar from "@/components/layout/TheAppBar.vue"; // @ is an alias to /src

@Options({
  components: {
    TheAppBar
  }
})
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
    border: solid 1px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.4rem;
    &:hover {
      background: black;
      border: solid 1px white;
      color: white;
    }
  }
}
</style>
