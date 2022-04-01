<template>
  <div ref="title">{{name}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
  name: "2_watchEffect的使用",
  setup(){
    let name=ref(10);
    const title=ref(null)
    const change=()=>{
      name.value++
    }
    watchEffect(()=>{
      // console.log(name.value);
      console.log(title.value)
    },{
      flush:'post'
    })
    return{
      name,change,
      title
    }
  }
}
</script>

<style scoped>

</style>