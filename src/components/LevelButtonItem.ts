import { defineComponent } from "vue";

export default defineComponent({
  // props 참고 https://v3.vuejs.org/guide/typescript-support.html#typing-reactive
  props: {
    levels: {
      type: Number,
      // default: () => [],
      required: true
    }
  },
  setup() {
    return {};
  }
});
