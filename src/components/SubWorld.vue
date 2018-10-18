<template>
    <input :type="type" :value="value" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Nullable } from "./interfaces";
import { VueWithModel } from "./vue-with-model";

@Component({
    name: "sub-world"
})
export default class SubWorld extends Mixins(VueWithModel) {
    @Prop({ default: false })
    public masked!: Nullable<boolean>;

    public get type() {
        return this.masked ? "password" : "phone";
    }
}
</script>

