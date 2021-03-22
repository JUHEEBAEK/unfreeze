<template>
  <div class="theme__main">
    <div class="main__header">
      <ul class="breadCrumbs__container">
        <li class="breadCrumbs__item breadCrumbs__item--to">
          <router-link to="/gameList">
            게임
          </router-link>
        </li>
        <li class="breadCrumbs__item breadCrumbs--divider">/</li>
        <li class="breadCrumbs__item">초성게임</li>
      </ul>
    </div>
    <div class="main__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ThemeMain extends Vue {}
</script>

<style scoped lang="scss">
.theme__main {
  display: flex;
  flex-direction: column;
  .main__header {
    height: 4vh;
    display: flex;
    align-items: center;
    .breadCrumbs__container {
      list-style: none;
      .breadCrumbs__item {
        float: left;
        font-size: 1.6rem;
        font-weight: 600;
        margin-right: 12px;
        color: grey;
        &--to {
          color: blue;
        }
      }
    }
  }

  .main__content {
  }
}
</style>
