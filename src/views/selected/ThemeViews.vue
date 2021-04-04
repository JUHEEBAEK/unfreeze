<template>
  <div class="level__list">
    <level-button-item :levels="level"></level-button-item>
  </div>
</template>

<script lang="ts" src="./ThemeViews.ts"></script>

<style scoped lang="scss">
.level__list {
  width: 60vmin;
  height: 100vmin;
  padding: 16px;
  font-size: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  margin: 0 auto;
}
</style>
