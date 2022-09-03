<template>
<div >
    <div class="index">
        <router-view></router-view>
    </div>
    <TabBar :data="TabBarData"></TabBar>
</div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
    name:"index",
    data(){
        return{
            TabBarData:[
                {title:"首页",icon:"home",path:'/home'},
                {title:"订单",icon:"file-text-o",path:'/order'},
                {title:"我的",icon:"user",path:'/me'}
            ]
        }
    },
    components:{
        TabBar
    }
}
</script>

<style>
.index{
    position: relative;
    width: 100%;
    height: calc(100vh - 45px);
    overflow: auto;
}
</style>