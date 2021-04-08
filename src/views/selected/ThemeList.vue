<template>
  <div class="theme__header">
    <layout-bread-crumbs :crumbs="breadcrumbs"></layout-bread-crumbs>
  </div>
  <div class="theme__list">
    <list-button-item :idfGame="idfGame" :themes="themes"></list-button-item>
  </div>
</template>

<script lang="ts" src="./ThemeList"></script>

<style scoped lang="scss">
.theme__list {
  width: 60vmin;
  padding: 16px;
  font-size: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
