import { Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";

import { Games } from "@/types/Games";

export default class GameList extends Vue {
  games = new Array<Games>();

  created() {
    this.games = itemConst.games;
  }
}
