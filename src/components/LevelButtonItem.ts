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
    idfTheme: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  setup() {
    return {};
  }
});
