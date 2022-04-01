<template>
  <div>{{ num }}</div>
  <button @click="change">按钮</button>
</template>

<script setup>
import {ref} from "vue";

name:'蒋轶';
const num=ref(10);
const change=()=>{
  num.value++
}
</script>

<style scoped>

</style>