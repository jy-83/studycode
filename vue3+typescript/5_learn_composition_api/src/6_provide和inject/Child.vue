<template>
<div>child:{{num}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Child",
  setup(){
    const num=inject('num');
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