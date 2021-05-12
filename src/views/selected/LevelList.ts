import { defineComponent } from "vue";
import info from "@/assets/data/info.json";
import { Crumbs } from "@/types/Crumbs";
// import { Games } from "@/types/Games";

export default defineComponent({
  data() {
    return {
      idfGame: "",
      idfTheme: "",
      breadcrumbs: new Array<Crumbs>(),
      level: 12,
      gameInfo: new Object()
      // gameInfo: {[idfGame: String]: Any}
    };
  },

  created(): void {
    const { idfGame, idfTheme } = this.$route.params;
    this.idfGame = idfGame.toString();
    this.idfTheme = idfTheme.toString();
    const gameInfo: any = info.games;
    const themeInfo: any = info.themes;
    this.breadcrumbs = [
      {
        name: gameInfo[this.idfGame].name,
        to: `/game/${this.idfGame}/theme`,
        isActive: true
      },
      {
        name: themeInfo[this.idfTheme].name,
        to: "",
        isActive: false
      }
    ];

    console.log(this.breadcrumbs);
  },
  mounted() {
    console.log(this.level);
  }
});
