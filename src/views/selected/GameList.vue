<template>
  <div class="game__list">
    <button-list-game :games="games"></button-list-game>
  </div>
</template>

<script lang="ts" src="./GameList.ts"></script>

<style scoped lang="scss">
.game__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
</style>
