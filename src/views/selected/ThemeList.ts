import { defineComponent } from "vue";
import itemConst from "@/assets/data/itemConst.json";
import info from "@/assets/data/info.json";

import { Themes } from "@/types/Themes";
import { Games } from "@/types/Games";
import { Crumbs } from "@/types/Crumbs";

export default defineComponent({
  data() {
    return {
      games: new Array<Games>(),
      themes: new Array<Themes>(),
      breadcrumbs: new Array<Crumbs>(),
      idfGame: "",
      title: ""
    };
  },

  created(): void {
    // idfGame router params로 가져오기.
    const { idfGame } = this.$route.params;
    this.idfGame = idfGame.toString();
    this.themes = itemConst.themes;
    console.log(idfGame);

    // 나중에 vuex로 바꾸기
    this.setTitle(this.idfGame);
  },

  methods: {
    setTitle(idfGame: string) {
      const gameInfo: any = info.games;
      console.log("set Title: title 이름 초성게임이라고 바꾸기");
      this.title = gameInfo[idfGame];
    }
  }
});
