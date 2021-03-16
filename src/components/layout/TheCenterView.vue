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
  width: 100%;
  height: 100%;
  /* background: honeydew; */
}
</style>
