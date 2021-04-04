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

<script lang="ts" src="./ChoSung.ts"></script>

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
