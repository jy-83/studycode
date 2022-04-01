<template>
  <div>{{name}}-{{age}}</div>
  <button @click="changeName">按钮</button>
</template>

<script>
import {reactive, toRefs,toRef} from "vue";

export default {
  name: "1_toRefs和toRef的使用",
  setup(){
    let info=reactive({name:'蒋轶',age:26});
    // let {name,age}=info;结构数据不是响应式的
    // let {name,age}=toRefs(info);
    // const changeName=()=>{
    //   name.value='周正雨';
    //   age.value=25;
    //   console.log(name,age)
    // }
    let name=toRef(info,'name');
    const changeName=()=>{
      name.value='周正雨'
    }
    return{
      name,
      changeName
    }
  }
}
</script>

<style scoped>

</style>