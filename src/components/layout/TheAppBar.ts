import { Vue } from "vue-class-component";

export default class TheAppBar extends Vue {
  data() {
    return {
      userName: "Username",
      title: "Unfreeze" // vuex로 구현하기
    };
  }
}
