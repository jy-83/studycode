<script>
import {h} from "vue";

export default {
  name: "2_render实现计数器",
  data(){
    return{
      count:0
    }
  },
  render(){
    return(
        h('div',null,[
            h('button',{onClick:()=>{
              this.count++
              }},'+1'),
            h('input',{
              value:this.count
            },null),
            h('button',{
              onClick:()=>{
                this.count--
              }
            },'-1')
        ])
    )
  }
}
</script>

<style scoped>

</style>