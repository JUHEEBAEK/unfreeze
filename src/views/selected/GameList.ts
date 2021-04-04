import { Options, Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";
import ButtonListGame from "@/components/buttonList/Game.vue";

import { Games } from "@/types/Games";

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
