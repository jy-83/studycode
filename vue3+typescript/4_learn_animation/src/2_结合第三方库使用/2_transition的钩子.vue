<template>
  <button @click="show=!show">切换</button>
  <transition name="jy" mode="out-in" enter-active-class="animate__animated animate__zoomIn"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
              leave-active-class="animate__animated animate__zoomOut" appear>
    <div v-if="show">我是1</div>
    <div v-else>我是2</div>
  </transition>
</template>

<script>
export default {
  name: "1_animate.css的使用",
  data() {
    return {
      show: true
    }
  },
  methods:{
    beforeEnter(){
      console.log('beforeEnter')
    },
    enter(){
      console.log('enter');
    },
    afterEnter(){
      console.log('afterEnter');
    },
    beforeLeave(){
      console.log('beforeLeave');
    },
    leave(){
      console.log('leave');
    },
    afterLeave(){
      console.log('afterLeave');
    }
  }
}
</script>

<style scoped>
/*.jy-enter-active,jy-leave-active{*/
/*  animation: slideInDown 4s ease;*/
/*}*/
</style>