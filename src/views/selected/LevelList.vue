<template>
  <div class="level__list">
    <level-button-item :levels="level"></level-button-item>
  </div>
</template>

<script lang="ts" src="./LevelList.ts"></script>

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
