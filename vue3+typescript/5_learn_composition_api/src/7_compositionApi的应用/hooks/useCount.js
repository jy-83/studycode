import {ref} from "vue";

export function useCount(){
    const num=ref(0);
    const increase=()=>{
        num.value++
    }
    const decrease=()=>{
        num.value--
    }
    return{
        num,
        increase,
        decrease
    }
}