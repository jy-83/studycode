<template>
  <div class="content">
    <input type="text" v-model="num">
    <div>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
    <div>{{data}}</div>
    <button @click="change">按钮</button>
    <div class="fixed">
      <div>鼠标位置：{{mouseX}}</div>
      <div>鼠标位置：{{mouseY}}</div>
      <div>滚动位置：{{scrollX}}</div>
      <div>滚动位置：{{scrollY}}</div>
    </div>
  </div>
</template>

<script>
import {useCount,useStorage,useTitle,useMouse,useScroll} from "@/7_compositionApi的应用/hooks";

export default {
  name: "App",
  setup(){
    const {num,increase,decrease}=useCount();
    const data=useStorage('name');
    const title=useTitle('我是标题');
    const {mouseX,mouseY}=useMouse();
    setTimeout(()=>{
      title.value='标题改变了'
    },3000)
    let number=0;
    const {scrollX,scrollY}=useScroll();
    const change=()=>{
      number++;
      data.value=('蒋轶'+number)
    }
    return{
      num,
      increase,
      decrease,

      data,
      change,

      mouseX,
      mouseY,

      scrollX,
      scrollY
    }
  }
}
</script>

<style scoped>
.content{
  width:5000px;
  height:5000px;
}
.fixed{
  position: fixed;
  bottom:30px;
  right:30px;
}
</style>