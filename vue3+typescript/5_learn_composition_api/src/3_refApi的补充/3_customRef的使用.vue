<template>
  <input type="text" v-model="message">
  <div>{{message}}</div>
</template>

<script>
import {decounce} from "@/3_refApi的补充/hooks/hooks";

export default {
  name: "3_customRef的使用",
  setup(){
    return{
      message:decounce('ceshi',1000)
    }
  }
}
</script>

<style scoped>

</style>