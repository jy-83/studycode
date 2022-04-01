<template>
  <div>{{message}}</div>
  <button @click="foo">按钮</button>
</template>

<script>
import mixinsDemo from "@/1_mixins和extend的使用/mixins/mixinsDemo";
export default {
  name: "App",
  mixins:[mixinsDemo],
  methods:{
    foo(){
      console.log('我是组件里面的foo');
    }
  }
}
</script>

<style scoped>

</style>