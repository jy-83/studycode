<template>
    <div>homecount:{{homecount}} </div>
    <div>minecount:{{minecount}}</div>
</template>

<script>
import {useState} from '@/hooks/index'
export default {
    setup () {
        const home=useState({homecount:'count'},'home');
        const mine=useState({minecount:'count'},'mine')
        return{
            ...home,
            ...mine
        }
    }
}
</script>

<style>

</style>