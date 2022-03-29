<template>
  <div class="title">我是父元素</div>
  <Child></Child>
</template>

<script>
import Child from "@/2_组件css的作用域/Child";
export default {
  name: "App",
  components:{
    Child
  }
}
</script>

<style scoped>
.title{
  color:red;
}
</style>