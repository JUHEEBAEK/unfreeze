import { Options, Vue } from "vue-class-component";
import LevelButtonItem from "@/components/LevelButtonItem.vue";

interface Level {
  idfLevel: number;
  level: string;
  value: string;
}

@Options({
  components: {
    LevelButtonItem
  }
})
export default class LevelList extends Vue {
  level = 12;

  mounted() {
    // It retains the property types for props
    console.log(this.level);
  }
}
