<template>
  <div class="game">
    <div class="game__theme_text">
      <span>주제: {{ theme }}</span>
    </div>
    <div class="game__display">
      <span v-for="(letter, index) in choSung" :key="index" class="box">{{
        letter
      }}</span>
    </div>
    <div class="game__answer">
      <input
        class="game__answer_input"
        v-model="answer"
        type="text"
        required
        maxlength="8"
        size="15"
        autocomplete="off"
        v-on:keyup.enter="checkAnswer()"
      />
      <input
        type="submit"
        value="제출"
        class="game_answer_submit"
        @click="checkAnswer()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Crumbs {
  name: string;
  to: string;
  isActive: boolean;
}
export default defineComponent({
  props: {
    word: {
      type: String,
      default: "사자"
    },
    theme: {
      type: String,
      default: "동물"
    }
  },
  data() {
    return {
      breadcrumbs: new Array<Crumbs>(),
      answer: ""
    };
  },
  computed: {
    choSung(): string {
      const cho = [
        "ㄱ",
        "ㄲ",
        "ㄴ",
        "ㄷ",
        "ㄸ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅃ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅉ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ"
      ];
      let result = "";
      for (let i = 0; i < this.word.length; i++) {
        const code = this.word.charCodeAt(i) - 44032;
        if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
      }
      return result;
    }
  },
  created() {
    this.breadcrumbs = [
      {
        name: "게임",
        to: "/game/list",
        isActive: true
      }
    ];
  },
  methods: {
    checkAnswer(): void {
      console.log(this.answer);
      if (this.answer == this.word) {
        this.$emit("success");
      } else {
        this.$emit("fail");
      }
    }
  }
});
</script>

<style scoped lang="scss">
.game {
  display: flex;
  flex-direction: column;
  .game__theme_text {
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .game__display {
    height: 20vh;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 4px 0 4px 0;
    .box {
      margin: 0 10px 0 10px;
      padding: 5px;
      border: 1px solid grey;
    }
  }

  .game__answer {
    height: 4vh;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    .game__answer_input {
      background-color: white;
      font-size: 20px;
    }
    .game_answer_submit {
      margin: 0 4px 0 4px;
      padding: 0 4px 0 4px;
      font-size: 20px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color: white;
      background-color: skyblue;
    }
  }
}
</style>
