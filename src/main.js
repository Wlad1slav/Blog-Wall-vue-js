import {createApp} from "vue";
import App from './App.vue';

import { loadConfig } from "@/utils/loadConfig";
import storePost from "@/store/storePost";

async function init() {
    const app = createApp(App);

    // load configs
    app.config.globalProperties.$config = await loadConfig();
    app.config.globalProperties.$configReactions = await loadConfig('configReactions.json');

    app.use(storePost);

    app.mount('#app');
}

init();