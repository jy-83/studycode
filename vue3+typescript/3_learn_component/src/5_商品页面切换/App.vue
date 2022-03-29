<template>
  <tabbar :nav="nav" @changeCurrent="changeCurrent"></tabbar>
  <div>{{nav[current]}}</div>
</template>

<script>
import tabbar from "@/5_商品页面切换/Tabbar";

export default {
  name: "App",
  data(){
    return{
      nav:['首页','商品页','详情页'],
      current:0
    }
  },
  components: {
    tabbar
  },
  methods:{
    changeCurrent(index){
      this.current=index;
    }
  }

}
</script>

<style scoped>

</style>