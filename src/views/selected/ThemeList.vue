<template>
  <div class="theme__list">
    <list-button-item :themes="themes"></list-button-item>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import itemConst from "@/assets/data/itemConst.json";
import ListButtonItem from "@/components/ListButtonItem.vue";

interface Themes {
  idfTheme: number;
  name: string;
  value: string;
}

@Options({
  components: {
    ListButtonItem
  }
})
export default class ThemeList extends Vue {
  themes = new Array<Themes>();

  mounted() {
    // It retains the property types for props
    this.themes = itemConst.themes;
  }
}
</script>

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
