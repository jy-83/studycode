import {ref} from "vue";

export function useMouse(){
    const mouseX=ref(0);
    const mouseY=ref(0);
    window.addEventListener('mousemove',event=>{
        mouseX.value=event.pageX;
        mouseY.value=event.pageY
    });
    return{
        mouseX,
        mouseY
    }
}