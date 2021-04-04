import { Vue } from "vue-class-component";

interface Level {
  idfLevel: number;
  level: string;
  value: string;
}

export default class LevelList extends Vue {
  level = 12;

  mounted() {
    // It retains the property types for props
    console.log(this.level);
  }
}
