import {ref} from "vue";

export function useScroll(){
    const scrollX=ref(0);
    const scrollY=ref(0);
    window.addEventListener('scroll',()=>{
        scrollY.value=window.scrollY
        scrollX.value=window.scrollX
    })
    return{
        scrollX,
        scrollY
    }
}