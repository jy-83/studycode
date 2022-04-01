<template>
  <div>{{info.name}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {shallowReactive, shallowRef, triggerRef} from "vue";

export default {
  name: "2_refApi补充",
  setup(){
    // shallowReactive不能深层级响应式
    // let info=shallowReactive({name:'蒋轶',age:26,user:{name:'周正雨'}});
    // const change=()=>{
    //     info.user.name='蒋轶';
    //     console.log(info)
    // }
    let info=shallowRef({name:'蒋轶'});
    const change=()=>{
      info.value.name='周正雨';
      triggerRef(info);
    }
    return{
      info,
      change
    }
  }
}
</script>

<style scoped>

</style>