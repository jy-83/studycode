<template>
  <Child>
    <template v-slot:default>
      <div>我是子组件的插槽啊</div>
    </template>
  </Child>
</template>

<script>
import Child from "@/8_插槽的基本使用/Child";
export default {
  name: "App",
  components: {
    Child
  }

}
</script>

<style scoped>

</style>