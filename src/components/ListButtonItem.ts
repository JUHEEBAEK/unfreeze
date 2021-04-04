import { defineComponent } from "vue";

export default defineComponent({
  // props 참고 https://v3.vuejs.org/guide/typescript-support.html#typing-reactive
  props: {
    themes: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup() {
    return {};
  }
});
