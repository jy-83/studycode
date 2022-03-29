<template>
 <Child class="test" title="我是传入的标题" id="test" :arr="arr"></Child>
  <Child2 class="test"></Child2>
</template>

<script>
import Child from "@/3_父元素给子元素传参/Child";
import Child2 from "@/3_父元素给子元素传参/Child2";
export default {
  name: "App",

  data(){
    return{
      arr:[
          '钢铁侠1',
          '钢铁侠2',
          '钢铁侠3'
      ]
    }
  },
  components:{
    Child,
    Child2
  }
}
</script>

<style scoped>

</style>