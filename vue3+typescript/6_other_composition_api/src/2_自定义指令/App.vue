<template>
<!--  <input type="text" v-focus>-->
  <div v-format-time="'YYYY/MM/DD'">{{time}}</div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "App",
  setup(){
    console.log(getCurrentInstance().appContext.config.globalProperties.$name)
    return{
      time:1648804283
    }
  },
  created() {
    console.log(this.$name)
  }
  // directives:{
  //   focus:{
  //     mounted(el,binding){
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>