import {ref, watch} from "vue";

export function useTitle(value){
    const title=ref(value);
    watch(title,(newVal,oldVal)=>{
        document.title=title.value;
    },{
        immediate:true
    })
    return title
}