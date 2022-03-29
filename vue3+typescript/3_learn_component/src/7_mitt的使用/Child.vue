<template>
  <div>我是Child</div>
</template>

<script>
import emitter from "@/7_mitt的使用/utils/mitt";
export default {
  name: "Child",
  created() {
    emitter.on('*',(res)=>{
      console.log('我是Child'+res)
    })
  }
}
</script>

<style scoped>

</style>