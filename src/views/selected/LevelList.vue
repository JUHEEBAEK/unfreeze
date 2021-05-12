<template>
  <div class="level__list">
    <div class="main__header">
      <layout-bread-crumbs
        :crumbs="breadcrumbs"
        divider="/"
      ></layout-bread-crumbs>
    </div>
    <div class="main__content">
      <level-button-item
        :idfGame="idfGame"
        :idfTheme="idfTheme"
        :levels="level"
      ></level-button-item>
    </div>
  </div>
</template>

<script lang="ts" src="./LevelList.ts"></script>

<style scoped lang="scss">
.level__list {
  width: 60vmin;
  padding: 16px;
  font-size: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
