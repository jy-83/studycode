<template>
  <input type="number" v-model.number="num">
  <button @click="add">添加</button>
  <button @click="remove">删除</button>
  <button @click="change">打乱</button>
  <transition-group name="jy" tag="div">
    <span v-for="(item,index) in list" :key="item">{{item}}</span>
  </transition-group>
</template>

<script>
import {shuffle} from 'loadsh'
export default {
  name: "1_css实现",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      num:0
    }
  },
  methods:{
    add(){
      this.list.splice(Math.floor(Math.random()*this.list.length),0,this.num)
    },
    remove(){
      this.list.splice(Math.floor(Math.random()*this.list.length),1)
    },
    change(){
      this.list=shuffle(this.list)
    }
  }
}
</script>

<style scoped>
span {
  margin: 10px;
  display: inline-block;
}
.jy-enter-from, .jy-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.jy-enter-active, .jy-leave-active{
  transition: all 1s ease;
}
.jy-leave-active{
  position:absolute;
}
.jy-move {
  transition: transform 1s ease;
}
</style>