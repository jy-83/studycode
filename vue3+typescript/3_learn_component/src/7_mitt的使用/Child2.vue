<template>
<div>我是Child2</div>
</template>

<script>
import emitter from "@/7_mitt的使用/utils/mitt";
export default {
  name: "Child2",
  created() {
    emitter.on('message',(res)=>{
      console.log('我是child2'+res)
    })
  },
}
</script>

<style scoped>

</style>