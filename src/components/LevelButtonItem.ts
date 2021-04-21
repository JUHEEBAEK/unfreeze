import { defineComponent } from "vue";

export default defineComponent({
  // props 참고 https://v3.vuejs.org/guide/typescript-support.html#typing-reactive
  props: {
    levels: {
      type: Number,
      required: true
    },
    idfGame: {
      type: String,
      required: true
    },
    themeValue: {
      type: String,
      required: true,
      default: "animal"
    }
  },
  data() {
    return {};
  },
  setup() {
    return {};
  }
});
