<template>
  <button @click="click">按钮</button>
  <Child ref="child"></Child>
</template>

<script>
import Child from "@/13_引用元素和组件/Child";

export default {
  name: "App",
  components: {
    Child
  },
  methods:{
    click(){
      this.$refs.child.getNum();
    }
  }
}
</script>

<style scoped>

</style>