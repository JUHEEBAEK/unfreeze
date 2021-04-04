<template>
  <div class="footer__container">
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts" src="./TheFooter.ts"></script>

<style scoped lang="scss">
.footer__container {
  background-color: #64b5f6;
  // background-color: #66bb6a;
  width: 100vw;
  height: 32px;
  padding: 0 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 1.2rem;
  color: white;
}
</style>
