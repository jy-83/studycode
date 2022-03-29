<template>
  <Child>
    <template v-slot:left>
      <div>我是左边的</div>
    </template>
    <template v-slot:right>
      <div>我是右边的</div>
    </template>
    <template v-slot:cener>
      <div>我也是中间的</div>
    </template>
  </Child>
</template>

<script>
import Child from "@/9_具名插槽的使用/Child";

export default {
  name: "App",
  components: {
    Child
  }
}
</script>

<style scoped>

</style>