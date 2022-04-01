
<script>
import {h, ref} from "vue";

export default {
  name: "3_setup实现计数器",
  setup(){
    const num=ref(0);
    return ()=>{
      return h('div',null,[
          h('button',{onClick:()=>{
            num.value++
            }},'+1'),
          h('input',{
            value:num.value
          }),
          h('button',{onClick:()=>{
            num.value--
            }},'-1')
      ])
    }
  }
}
</script>

<style scoped>

</style>