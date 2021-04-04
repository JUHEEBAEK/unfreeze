import { defineComponent } from "vue";

export default defineComponent({
  props: {
    divider: {
      type: String,
      default: "/",
      required: true
    },
    crumbs: {
      type: Array,
      default: () => [{ name: "게임", to: "/gameList", isActive: true }],
      required: true
    }
  },

  setup() {
    return {};
  }
});
