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
