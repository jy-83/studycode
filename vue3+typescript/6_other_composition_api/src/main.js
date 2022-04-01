import { createApp } from 'vue'
import App from './3_teleport内置组件/App.vue';
import directives from "@/directives";
import plugins from './plugins/1_plugins_obj'

const app=createApp(App)
app.directive('focus',{
    mounted(el,binding){
        el.focus()
    }
})
app.use(plugins)
directives(app);
app.mount('#app')
