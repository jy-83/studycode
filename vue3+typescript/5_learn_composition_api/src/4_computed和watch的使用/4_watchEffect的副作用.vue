<template>
  <div>{{num}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
  name: "4_watchEffect的副作用",
  setup(){
    const num=ref(10);
    const change=()=>{
      num.value++
    }
    watchEffect((fu)=>{
      let timer=setTimeout(()=>{
        console.log('请求成功');
      },2000)
      fu(()=>{
        clearTimeout(timer);
        console.log('进入了')
      })
      console.log(num.value)
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