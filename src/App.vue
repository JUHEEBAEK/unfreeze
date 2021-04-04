<template>
  <div id="nav" class="app__container">
    <layout-the-app-bar></layout-the-app-bar>
    <layout-the-center-view></layout-the-center-view>
    <layout-the-footer />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/main.sass";
</style>
