import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { Nullable } from "./interfaces";
import { Mixin } from "vue-mixin-decorator";

interface InputKeyboardEvent extends KeyboardEvent {
  target: HTMLInputElement;
}

function getValueFrom(el: HTMLInputElement) {
  return el.type === "checkbox" || el.type === "radio" ? el.checked : el.value;
}

@Mixin
export class VueWithModel extends Vue {
  @Prop({ default: null })
  public value!: Nullable<string>;
  public onInput(e: InputKeyboardEvent) {
    if (!e || !e.target) {
      return;
    }
    this.$emit("input", getValueFrom(e.target));
  }

  public created() {
      this.$on("input", this.onInput.bind(this));
  }
}
