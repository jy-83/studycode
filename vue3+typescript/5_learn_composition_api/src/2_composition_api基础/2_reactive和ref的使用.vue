<template>
  <button @click="increase">+1</button>
  <input type="text" v-model="num">
  <button @click="decrease">-1</button>
</template>

<script>
import {reactive,ref} from "vue";

export default {
  name: "App",
  setup(){
    const num=ref(0);
    const increase=()=>{
      num.value++
    };
    const decrease=()=>{
      num.value--
    }
    // const status=reactive({num:1});
    // const increase=()=>{
    //   status.num++
    // };
    // const decrease=()=>{
    //   status.num--
    // };
    return{
      // status,
      increase,
      decrease,
      num
    }
  }
}
</script>

<style scoped>

</style>