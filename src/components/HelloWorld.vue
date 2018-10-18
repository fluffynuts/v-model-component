<template>
  <div>
    <h3>Example of (ab)using v-model with a mixin to handle binding</h3>
    <div v-if="shown">
      <div>
      <label>Mobile: <span>{{mobile}}</span></label>
      </div>
      <div>
      <label>Password: <span>{{password}}</span></label>
      </div>
    </div>
    <div v-if="shown">
      <sub-world v-model="mobile"></sub-world>
      <sub-world v-model="password" masked="true"></sub-world>
      <button @click="reset()">Reset</button>
    </div>
    <button @click="toggle()">Toggle</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import SubWorld from "./SubWorld.vue";
import { Nullable } from "./interfaces";

@Component({
  name: "hello-world"
})
export default class HelloWorld extends Vue {
  public shown = true;
  public mobile = "";
  public password = "";
  public reset() {
    this.mobile = "";
    this.password = "";
  }

  public toggle() {
    this.shown = !this.shown;
  }
}
</script>

<style scoped lang="scss">
</style>
