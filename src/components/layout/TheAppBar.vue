<template>
  <div class="appBar__conatainer">
    <div class="appBar__title">
      <router-link to="/" class="router__item">
        <span>Title</span>
      </router-link>
    </div>
    <div class="appBar__userInfo">
      <span class="avatar__text"> UserName </span>
      <div class="avatar__container">
        <img src="@/assets/images/cow.png" class="avatar__image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TheAppBar extends Vue {}
</script>

<style scoped lang="scss">
.appBar__conatainer {
  width: 100%;
  height: 70px;
  border-bottom: solid 1px #e9f1ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  .appBar__title {
    padding: 0 24px;
    .router__item {
      text-decoration: none;
    }
    span {
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .appBar__userInfo {
    padding: 0 24px;
    display: flex;
    align-items: center;
    .avatar__text {
      padding: 0 8px;
    }
    .avatar__container {
      .avatar__image {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
