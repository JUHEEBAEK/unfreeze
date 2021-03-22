<template>
  <div class="theme__item" v-for="(theme, index) in themes" :key="index">
    <router-link class="area__full" :to="`/theme/${theme.value}`">
      <span class="item__text">{{ theme.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
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
</script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.theme__item {
  display: flex;
  align-items: center;
  // justify-content: center;
  background-color: #ecf0f3;
  border-radius: 16px;
  margin: 12px;
  width: 196px;
  height: 78px;
  // width: 20vmin;
  // height: 8vmin;
  /*
    box-shadow: y축  x축  가장자리 블러처리
    처음 오른쪽 아래쪽, 그 다음 왼쪽 위쪽
    */
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  &:hover {
    box-shadow: 8px 8px 32px #cbced1, -8px -8px 32px #ffffff;
  }
}
.item__text {
  font-size: 2.4rem;
  font-weight: 500;
  font-style: normal;
  font-family: sans-serif;
}
</style>
