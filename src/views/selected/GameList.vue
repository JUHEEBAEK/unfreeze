<template>
  <div class="game__list">
    <button-list-game :games="games"></button-list-game>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";
import ButtonListGame from "@/components/buttonList/Game.vue";

interface Games {
  idfGame: number;
  name: string;
  value: string;
}

@Options({
  components: {
    ButtonListGame
  }
})
export default class GameList extends Vue {
  games = new Array<Games>();

  created() {
    this.games = itemConst.games;
  }
}
</script>

<style scoped lang="scss">
.game__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
</style>
