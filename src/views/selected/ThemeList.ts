import { defineComponent } from "vue";
import itemConst from "@/assets/data/itemConst.json";

import { Themes } from "@/types/Themes";
import { Games } from "@/types/Games";

export default defineComponent({
  data() {
    return {
      games: new Array<Games>(),
      themes: new Array<Themes>(),
      idfGame: ""
    };
  },

  created(): void {
    // idfGame router params로 가져오기.
    const { idfGame } = this.$route.params;
    this.idfGame = idfGame.toString();
    this.themes = itemConst.themes;
    // 나중에 vuex로 바꾸기
    this.setTitle();
  },

  methods: {
    setTitle() {
      console.log("set Title: title 이름 초성게임이라고 바꾸기");
    }
  }
});
