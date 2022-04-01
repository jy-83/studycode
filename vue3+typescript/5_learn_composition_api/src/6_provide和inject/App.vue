<template>
  <div>father:{{num}}</div>
  <button @click="change">按钮</button>
  <child></child>
</template>

<script>
import child from "@/6_provide和inject/Child";
import {provide, readonly, ref} from "vue";

export default {
  name: "App",
  components:{
    child
  },
  setup(){
    const num=ref('10');
    provide('num',readonly(num));
    const change=()=>{
      num.value++
    }
    return{
      num,
      change
    }
  }
}
</script>

<style scoped>

</style>