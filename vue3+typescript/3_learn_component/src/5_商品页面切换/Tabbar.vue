<template>
  <ul>
    <li v-for="(item,index) in nav" :key="item"  @click="changeCurrent(index)" :class="{active:nav[current]===item}" >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "Tabbar",
  data(){
    return {
      current:0
    }
  },
  emits:['changeCurrent'],
  props:{
    nav:{
      type:Object,
      required:true
    }
  },
  methods:{
    changeCurrent(index){
      this.current=index;
      this.$emit('changeCurrent',index)
    }
  }
}
</script>

<style scoped>
ul{
  display: flex;
  list-style: none;
  padding:0;
  margin:0
}
li{
  flex:1;
  text-align: center;
  cursor: pointer;
}
.active{
  color:red;
}
</style>