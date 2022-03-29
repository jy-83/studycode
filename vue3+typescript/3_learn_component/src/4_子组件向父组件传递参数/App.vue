<template>
  <div>{{count}}</div>
  <Child @increase="increase" @decrease="decrease" @changeNum="changeNum"></Child>
</template>

<script>
import Child from "@/4_子组件向父组件传递参数/Child";
export default {
  name: "App",
  data(){
    return{
      count:0
    }
  },
  components:{
    Child
  },
  methods:{
    increase(){
      this.count++
    },
    decrease(){
      this.count--
    },
    changeNum(i){
      this.count+=i;
    }
  }
}
</script>

<style scoped>

</style>