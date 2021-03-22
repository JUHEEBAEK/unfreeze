<template>
  <div class="level__list">
    <level-button-item :levels="level"></level-button-item>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LevelButtonItem from "@/components/LevelButtonItem.vue";

interface Level {
  idfLevel: number;
  level: string;
  value: string;
}

@Options({
  components: {
    LevelButtonItem
  }
})
export default class LevelList extends Vue {
  level = 12;

  mounted() {
    // It retains the property types for props
    console.log(this.level);
  }
}
</script>

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
