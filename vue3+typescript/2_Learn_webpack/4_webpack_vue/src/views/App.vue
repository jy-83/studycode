<template>
  <div @click="click">{{ message }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: '我是测试'
    }
  },
  methods:{
    click(){
      console.log('点击了')
    }
  }
}
</script>

<style scoped>

</style>