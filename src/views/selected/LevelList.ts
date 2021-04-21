import { defineComponent } from "vue";
import info from "@/assets/data/info.json";
import { Crumbs } from "@/types/Crumbs";
import { Games } from "@/types/Games";

interface Level {
  idfLevel: number;
  level: string;
  value: string;
}

interface GameInfo {
  idfGame: number;
  name: string;
  value: string;
  description: string;
}

export default defineComponent({
  data() {
    return {
      idfGame: "",
      value: "",
      breadcrumbs: new Array<Crumbs>(),
      level: 12
      // gameInfo: {[idfGame: String]: Any}
    };
  },

  created(): void {
    console.log(this.$route.params);
    const { idfGame, value } = this.$route.params;
    this.idfGame = idfGame.toString();
    this.value = value.toString();
    // type Key = { idfGame: string | number };
    // const gameInfo = info.games[this.idfGame : Key];
    console.log(info.games[1]);
    // this.breadcrumbs = [
    //   {
    //     name: "동물",
    //     to: "/game/list",
    //     isActive: true
    //   }
    // ];
  },
  mounted() {
    console.log(this.level);
  }
});
