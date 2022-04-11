import { useStore } from "vuex";
import { computed } from "vue";
export function useMapper(mapper,playlod){
    const fn=playlod(mapper);
    const store=useStore();
    const getters={}
    Object.keys(fn).forEach(key=>{
        getters[key]=computed(fn[key].bind({$store:store}))
    })
    return getters
}