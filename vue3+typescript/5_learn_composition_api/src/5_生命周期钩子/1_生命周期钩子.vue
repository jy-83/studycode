<template>
  <div>{{message}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: "1_生命周期钩子",
  setup(){
    const message=ref('我是message');
    onMounted(()=>{
      console.log('mounted');
    })
    onUpdated(()=>{
      console.log('updated');
    })
    onUnmounted(()=>{
      console.log('unmounted');
    })
    const change=()=>{
      message.value='我是改变了'
    }
    return{
      message,
      change
    }
  }
}
</script>

<style scoped>

</style>