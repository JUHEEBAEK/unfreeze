import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const app = createApp(App);

const requireComponent = require.context("@/components", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName).default;

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );

  app.component(componentName, componentConfig);
});

app
  .use(store)
  .use(router)
  .mount("#app");
