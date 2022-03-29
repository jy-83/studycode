<template>
  <button @click="add">按钮</button>
  <Home></Home>
</template>

<script>
import Home from "@/6_provide和inject的使用/Home";
import {computed} from "vue";
export default {
  name: "App",
  data(){
    return{
      list:['尤雨奚','coderwhy']
    }
  },
  provide(){
    return{
      message:'我是爷爷组件里面的东西',
      total:computed(()=>this.list.length)
    }
  },
  components:{
    Home
  },
  created() {
    console.log(this.message)
  },
  methods:{
    add(){
      this.list.push('蒋轶')
    }
  }
}
</script>

<style scoped>

</style>