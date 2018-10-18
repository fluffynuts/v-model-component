import Vue from "vue";

export function autoRegisterComponents() {
  const ctx = require.context("/", true, /.vue$/);
  ctx.keys().forEach(k => {
    const mod = ctx(k);
    if (!mod) {
      return;
    }
    Object.keys(mod).forEach(modk => {
      const exported = mod[modk],
        options = exported.extendOptions,
        name = options ? options.name : "";
      if (name) {
        Vue.component(name, exported);
      }
    });
  });
}
