import {customRef} from "vue";

export function decounce(value,delay){
    let timer=null;
    return customRef((track,trigger)=>{
        return{
            get(){
                track();
                return value
            },
            set(newVal){
                clearTimeout(timer)
                timer=setTimeout(()=>{
                    value=newVal;
                    trigger()
                },delay)
            }
        }
    })
}