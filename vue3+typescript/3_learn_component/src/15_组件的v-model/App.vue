<template>
  <InputTest v-model="message"></InputTest>
  <div>{{message}}</div>
</template>

<script>
import InputTest from "@/15_组件的v-model/InputTest";

export default {
  name: "App",
  data() {
    return {
      message: '我是测试的'
    }
  },
  components: {
    InputTest
  }
}
</script>

<style scoped>

</style>