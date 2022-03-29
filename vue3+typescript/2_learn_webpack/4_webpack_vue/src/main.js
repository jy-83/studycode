import {createApp} from 'vue/dist/vue.esm-bundler';
import axios from 'axios';

import App from "./views/App";
import 'normalize.css/normalize.css';
import '@/assets/js/test'
// module.hot.accept('./assets/js/test',()=>{
//     console.log('监听到了热更新')
// })
axios.get('/api/index/code').then(res=>{
    console.log(res)
})
axios.get('/test/chengdu_districts/district_lists').then(res=>{
    console.log(res)
})
const app=createApp(App)

app.mount('#app')