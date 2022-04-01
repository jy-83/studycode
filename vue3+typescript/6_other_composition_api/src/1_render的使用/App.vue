<script>
import HelloWorld from "@/1_render的使用/HelloWorld";
import {h} from "vue";
export default {
  name: "APP",
  data(){
    return{
      message:'我是消息'
    }
  },
  render(){
    return(
        h('div',null,[
            h('div',null,'我是测试的'),
            h(HelloWorld,{},)
        ])
    )
  }
}
</script>

<style scoped>

</style>