<template>
  <ul class="breadCrumbs__container">
    <template v-for="(crumb, index) in crumbs" :key="index">
      <li v-if="crumb.isActive" class="breadCrumbs__item ">
        <router-link class="breadCrumbs__item--to" :to="crumb.to">
          <span>{{ crumb.name }}</span>
        </router-link>
      </li>
      <li v-if="crumb.isActive" class="breadCrumbs__item breadCrumbs--divider">
        {{ divider }}
      </li>
      <li v-else class="breadCrumbs__item">초성게임</li>
    </template>
  </ul>
</template>

<script lang="ts">
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
</script>

<style scoped lang="scss">
.breadCrumbs__container {
  list-style: none;
  .breadCrumbs__item {
    float: left;
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: 12px;
    color: grey;
    &--to {
      color: blue;
    }
  }
}
</style>
