<template>
  <div @click="click">{{ message }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: '测试2'
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
div{
  color:red
}
</style>