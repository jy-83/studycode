<template>
  <button @click="show=!show">按钮</button>
  <transition @enter="enter" @leave="leave">
    <div v-if="show">1111</div>
  </transition>
</template>

<script>
import gsap from 'gsap'
export default {
  name: "3_结合gasp实现动画",
  data(){
    return{
      show:true
    }
  },
  methods:{

    enter(el,done){
      gsap.from(el,{
        x:130,
        scale:0,
        onComplete:done
      })
    },
    leave(el,done){
      gsap.to(el,{
        x:130,
        scale:0,
        onComplete:done
      })
    }
  }
}
</script>

<style scoped>

</style>