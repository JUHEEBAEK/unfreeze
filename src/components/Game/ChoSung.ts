import { defineComponent } from "vue";
import { Crumbs } from "@/types/Crumbs";

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
