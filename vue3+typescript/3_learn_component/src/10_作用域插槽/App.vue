<template>
  <Child>
    <template #message="{status}">
      <div>{{status.total}}</div>
    </template>
  </Child>
</template>

<script>
import Child from "@/10_作用域插槽/Child";
export default {
  name: "App",
  components:{
    Child
  }
}
</script>

<style scoped>

</style>