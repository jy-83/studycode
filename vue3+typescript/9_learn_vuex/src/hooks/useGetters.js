import {mapGetters,createNamespacedHelpers } from "vuex";
import { useMapper } from "./useMapper";
export function useGetters(mapper,moduleName){
    let mapperFn=mapGetters;
    if(moduleName){
        mapperFn=createNamespacedHelpers(moduleName).mapGetters
    }
    return useMapper(mapper,mapGetters)
}