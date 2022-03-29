<template>
<!--  <child1></child1>-->
  <child2></child2>
</template>

<script>
import child1 from './1_过度动画的使用';
import child2 from './2_mode的使用'
export default {
  name: "App",
  components:{
    child1,
    child2
  }
}
</script>

<style scoped>

</style>