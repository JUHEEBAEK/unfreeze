import { Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";

import { Themes } from "@/types/Themes";
import { Crumbs } from "@/types/Crumbs";

export default class ThemeList extends Vue {
  themes = new Array<Themes>();
  breadcrumbs = new Array<Crumbs>();
  themeInfo = Object;

  data() {
    return {
      themes: []
    };
  }

  created(): void {
    // It retains the property types for props
    this.themes = itemConst.themes;
    this.breadcrumbs = [
      {
        name: "게임",
        to: "/game/list",
        isActive: true
      }
    ];

    // this.getThemeInfo("1");
  }

  // getThemeInfo(idfGame: string): void {
  //   this.themeInfo = dataInfo.games[1];
  // }
}
