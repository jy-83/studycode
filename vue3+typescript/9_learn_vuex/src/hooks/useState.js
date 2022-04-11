import {mapState,createNamespacedHelpers } from "vuex";
import { useMapper } from "./useMapper";
export function useState(mapper,moduleName){
    let mapperFn=mapState;
    if(moduleName){
        mapperFn=createNamespacedHelpers(moduleName).mapState;
    }
    return useMapper(mapper,mapperFn)
}