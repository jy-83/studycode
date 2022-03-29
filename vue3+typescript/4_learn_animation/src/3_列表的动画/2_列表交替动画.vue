<template>
  <input type="text" v-model="name">
  <transition-group tag="ul" @enter="enter" @leave="leave" @before-enter="beforeEnter">
    <li v-for="(item,index) in showName" data-index="index" :key="item" >{{item}}</li>
  </transition-group>
</template>

<script>
import gsap from "gsap";
export default {
  name: "2_列表交替动画",
  data(){
    return{
      name:'',
      list:["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"]
    }
  },
  computed:{
    showName(){
      return this.list.filter(item=>  item.indexOf(this.name)!=-1)
    }
  },
  methods:{
    beforeEnter(el){
      el.style.opacity=0;
      el.style.height=0;
    },
    enter(el,done){
      gsap.to(el,{
        opacity:1,
        height:'1.5em',
        delay:el.dataset.index*0.5,
        duration:1,
        onComplete:done
      })
    },
    leave(el,done){
      gsap.to(el,{
        opacity:0,
        height:0,
        duration:1,
         delay:el.dataset.index*0.5,
        onComplete:done
      })
    }
  }
}
</script>

<style scoped>

</style>