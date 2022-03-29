<template>
  <Child></Child>
</template>

<script>
import Child from "@/6_provide和inject的使用/Child";
export default {
  name: "Home",
  components:{
    Child
  },
  provide(){
    return{
      message:'我是父亲组件里面的'
    }
  }
}
</script>

<style scoped>

</style>