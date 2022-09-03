<template>
  <div class="home">
    <div class="header">
        <div class="search" @click="toSearch">
            <i class="fa fa-search"> </i>
            搜索商家 商家名称
        </div>
    </div>

    <div class="filterView">
        <FilterView ></FilterView>
    </div>
    <div class="shop-list">
        <shop v-for="(item,index) in restaurants" :key="index" :restaurant="item">

        </shop>
    </div>
  </div>

</template>

<script>
import FilterView from '../components/FilterView.vue'
import Shop from '../components/IndexShop.vue'
export default {
    name:"Home",
    data(){
        return{
            //存放商家
            restaurants:[
                {
                    imagePath:"../assets/logo.png",
                    name:"麦当劳1",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },{
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳2",
                    deliveryByPlat:true,
                    miniAccount:23,
                    deliveryFee:6,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳3",
                    deliveryByPlat:true,
                    miniAccount:13.9,
                    deliveryFee:8,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳4",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳5",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳6",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳7",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },
                {
                    imagePath:"https://cn.bing.com/images/search?view=detailV2&ccid=hmdrOATg&id=9547838B8BE0D39133B6AA15B3F6ED36E80805D8&thid=OIP.hmdrOATg7Lm0gGzX4fyhOwAAAA&mediaurl=https%3a%2f%2fpic2.ntimg.cn%2ffile%2f20171018%2f2929626_221404857603_1.jpg&exph=145&expw=150&q=%e9%ba%a6%e5%bd%93%e5%8a%b3logo&simid=608053144919682875&FORM=IRPRST&ck=D8D1C366430C7BDCCBC2E3AA63FE0EF0&selectedIndex=9&ajaxhist=0&ajaxserp=0",
                    name:"麦当劳8",
                    deliveryByPlat:true,
                    miniAccount:12.9,
                    deliveryFee:7,
                },
            ]
        }
    },
    components:{
        FilterView,
        Shop
    },
    methods:{
        toSearch(){
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    position: relative;
    width:100%;
    height: 100%;
    box-sizing: border-box;
    .header{
        box-sizing: border-box;
        width: 100%;
        height: 65px;
        position: sticky;
        top: 0px;
        left: 0px;
        z-index: 5;
        background: #009eef;
        padding: 16px;
        .search{
            
            background-color: #fff;
            padding: 10px ;
            border-radius: 4px ;
            text-align: center;
            color: #aaa;
        }
    }
    .filterView{
        position: sticky;
        top:65px
    }
}
</style>