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
      default: () => [{ name: "GameList", to: "/game/list", isActive: true }],
      required: true
    }
  },

  setup() {
    return {};
  }
});
