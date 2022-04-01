import {ref, watch} from "vue";

export function useStorage(key,value){
    const data=ref(value);
    if(value){
        window.localStorage.setItem(key,JSON.stringify(value))
    }else{
        data.value=window.localStorage.getItem(key)
    }
    watch(data,(newValue,oldValue)=>{
        window.localStorage.setItem(key,JSON.stringify(newValue))
    })
    return data;
}