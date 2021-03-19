<template>
  <div class="content__main">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TheCenterView extends Vue {}
</script>

<style scoped>
.content__main {
  width: 100vw;
  height: calc(100vh - 102px);
}
</style>
