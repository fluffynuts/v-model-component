import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { Mixin } from "vue-mixin-decorator";

interface InputEvent extends KeyboardEvent {
  target: HTMLInputElement;
}

function getValueFrom(el: HTMLInputElement) {
  return el.type === "checkbox" || el.type === "radio" ? el.checked : el.value;
}

@Mixin
export class VueWithModel extends Vue {
  @Prop({ default: null })
  public value!: any; // **

  private _onInput!: EventListenerObject;

  public onInput(e: InputEvent) {
    if (!e || !e.target) {
      return;
    }
    this.$emit("input", getValueFrom(e.target));
  }

  public mounted() {
      this._onInput = this.onInput.bind(this);
      this.$el.addEventListener("input", this._onInput);
  }
  public beforeDestroy() {
      this.$el.removeEventListener("input", this._onInput);
  }
}

// ** I'd prefer to make VueWithModel generic (ie VueWithModel<T>) but
//      then it doesn't play nicely with the Mixins decorator
