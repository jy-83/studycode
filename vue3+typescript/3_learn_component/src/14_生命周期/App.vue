<template>
  <button @click="click">按钮</button>
  <button @click="show=!show">是否显示</button>
  <div>{{ message }}</div>
  <Child v-if="show"></Child>
</template>

<script>
import Child from "@/14_生命周期/Child";
export default {
  name: "App",
  components:{
    Child
  },
  data() {
    return {
      message: '测试',
      show:true
    }
  },
  methods: {
    click() {
      this.message = '改变了'
    }
  },
  beforeCreate() {
    console.log(`app beforeCreate`)
  },
  created() {
    console.log(`app created`)
  },
  beforeMount() {
    console.log(`app beforeMount`)
  },
  mounted() {
    console.log(`app mounted`)
  },
  beforeUpdate() {
    console.log(`app beforeUpdate`)
  },
  updated() {
    console.log(`app updated`)
  }, beforeUnmount() {
    console.log(`app beforeUnmount`)
  },
  unmounted() {
    console.log(`app unmounted`)
  },

}
</script>

<style scoped>

</style>