<template>
  <Child></Child>
  <Child2></Child2>
  <button @click="change">按钮</button>
  <button @click="change1">按钮1</button>
</template>

<script>
import Child from "@/7_mitt的使用/Child";
import Child2 from "@/7_mitt的使用/Child2";
import emitter from "@/7_mitt的使用/utils/mitt";
export default {
  name: "App",
  components:{
    Child,
    Child2
  },
  methods:{
    change(){
      emitter.emit('message','改变了啊')
    },
    change1(){
      emitter.emit('get','我是change1事件')
    }
  }
}
</script>

<style scoped>

</style>