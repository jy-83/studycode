<template>
  <div>{{info.name}}-{{info.user.age}}</div>
  <button @click="change">按钮</button>
  <div>{{num}}</div>
</template>

<script>
import {reactive,watch,ref} from "vue";

export default {
  name: "5_watch监听的数据源类型",
  setup(){
    let info=reactive({name:'蒋轶',age:26,user:{age:10}});

    const num=ref(11);
    // watch(()=>info.age,(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })
    // watch(()=> {
    //   return {...info}
    // },(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })
    watch(()=>{return [{...info},num.value]},(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    },{
      immediate:true,
      deep:false
    })
    // watch(num,(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })
    const change=()=>{
      info.user.age++;
      num.value++
    }
    change();
    return{
      info,
      change,
      num
    }
  }
}
</script>

<style scoped>

</style>