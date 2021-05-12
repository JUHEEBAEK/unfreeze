<template>
  <ul class="breadCrumbs__container">
    <template v-for="(crumb, index) in crumbs" :key="index">
      <li v-if="crumb.isActive" class="breadCrumbs__item ">
        <router-link class="breadCrumbs__item--to" :to="crumb.to">
          <span>{{ crumb.name }}</span>
        </router-link>
      </li>
      <li v-else class="breadCrumbs__item">
        <span>{{ crumb.name }}</span>
      </li>
      <li
        v-if="index !== crumbs.length - 1"
        class="breadCrumbs__item breadCrumbs--divider"
      >
        {{ divider }}
      </li>
    </template>
  </ul>
</template>

<script lang="ts" src="./BreadCrumbs.ts"></script>

<style scoped lang="scss">
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
</style>
