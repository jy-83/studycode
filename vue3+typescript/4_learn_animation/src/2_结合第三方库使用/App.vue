<template>
<!--  <Child1></Child1>-->
<!--  <Child2></Child2>-->
<!--  <Child3></Child3>-->
  <Child4></Child4>
</template>

<script>
import Child1 from './1_animate.css的使用'
import Child2 from'./2_transition的钩子'
import Child3 from './3_结合gsap实现动画'
import Child4 from './4_gsap实现数字递增'

export default {
  name: "App",
  components: {
    Child1,
    Child2,
    Child3,
    Child4
  }
}
</script>

<style scoped>

</style>