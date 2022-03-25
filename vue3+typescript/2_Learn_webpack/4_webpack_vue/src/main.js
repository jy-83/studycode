import {createApp} from 'vue/dist/vue.esm-bundler';

import App from "./views/App.vue";
import 'normalize.css/normalize.css';


const app=createApp(App)

app.mount('#app')