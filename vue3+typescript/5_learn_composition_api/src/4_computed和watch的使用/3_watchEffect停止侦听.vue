<template>
  <div>{{num}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {watchEffect,ref} from "vue";

export default {
  name: "3_watchEffect停止侦听",
  setup(){
    const num=ref(10);
    const change=()=>{
      num.value++
      if(num.value>15){
        stop()
      }
    }
    const stop=watchEffect(()=>{
      console.log(num.value);
    })
    return{
      num,
      change
    }
  }
}
</script>

<style scoped>

</style>