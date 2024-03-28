import "./bootstrap";
import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import {loadConfig} from "./Utils/loadConfig";
import storePost from "./Store/storePost";

async function init() {
    const app = createApp(App);

    app.use(router);

    // load configs
    app.config.globalProperties.$config = await loadConfig();
    app.config.globalProperties.$configReactions = await loadConfig('configReactions.json');

    app.use(storePost);

    app.mount("#app");
}

init();
