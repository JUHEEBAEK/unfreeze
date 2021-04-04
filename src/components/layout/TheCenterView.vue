<template>
  <div class="content__main">
    <router-view />
  </div>
</template>

<script lang="ts" src="./TheCenterView.ts"></script>

<style scoped>
.content__main {
  width: 100vw;
  height: calc(100vh - 102px);
  padding: 12px 30px;
  overflow-y: scroll;
}
</style>
