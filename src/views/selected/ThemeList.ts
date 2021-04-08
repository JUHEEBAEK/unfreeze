import { Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";
import dataInfo from "@/assets/data/info.json";

import { Themes } from "@/types/Themes";
import { Crumbs } from "@/types/Crumbs";
import { Games } from "@/types/Games";

export default class ThemeList extends Vue {
  games = new Array<Games>();
  themes = new Array<Themes>();
  breadcrumbs = new Array<Crumbs>();
  idfGame: string[] | string = "";
  gameList: { [key: string]: { [key: number]: Array<Games> } } = {};
  // gameinfo: Games = {};

  created(): void {
    this.gameList = dataInfo.games;
    this.idfGame = this.$router.currentRoute.value.params.idfGame;
    console.log("this.idfGame", this.idfGame);
    this.themes = itemConst.themes;
    this.breadcrumbs = [
      {
        name: "게임",
        to: "/game/list",
        isActive: true
      }
    ];

    this.getgameInfo(this.idfGame);
  }

  getgameInfo(key: string | string[]): void {
    console.log("res", this.gameList[key]);
    // this.gameInfo = this.gameList[key];
  }
}
