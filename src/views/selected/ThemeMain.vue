<template>
  <div class="theme__main">
    <div class="main__header">
      <layout-bread-crumbs></layout-bread-crumbs>
    </div>
    <div class="main__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" src="./ThemeMain.ts"></script>

<style scoped lang="scss">
.theme__main {
  display: flex;
  flex-direction: column;
  .main__header {
    height: 4vh;
    display: flex;
    align-items: center;
  }

  .main__content {
  }
}
</style>
