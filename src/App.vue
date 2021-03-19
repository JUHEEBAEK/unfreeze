<template>
  <div id="nav" class="app__container">
    <the-app-bar></the-app-bar>
    <the-center-view></the-center-view>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheAppBar from "@/components/layout/TheAppBar.vue"; // @ is an alias to /src
import TheCenterView from "@/components/layout/TheCenterView.vue"; // @ is an alias to /src
import TheFooter from "@/components/layout/TheFooter.vue"; // @ is an alias to /src

@Options({
  components: {
    TheAppBar,
    TheCenterView,
    TheFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/main.sass";
</style>
