<template>
  <ul class="search-list">
    <li v-for="(item,index) in result" :key="index"
        @click="goToShop">
        <span class="title">{{item.title}}</span>

        <span class="rate">
            <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
            </div>
            <span class="rating">{{item.rate}}</span>
        </span>
    </li>
  </ul>
</template>

<script>
export default {
     data(){
        return{
            result:[
                {title:"麦当劳",rate:"5.0"},
                {title:"肯德基",rate:"5.0"},
                {title:"德克士",rate:"5.0"},
                {title:"汉堡王",rate:"5.0"},
            ]
        }
    },
    methods:{
        goToShop(){
            this.$router.push('/shop');
        }
    }
}
</script>

<style lang="less" scoped>
.search-list{
    width: 100%;
    background-color: #fff;
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        line-height: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.08);
        padding: 10px 20px;
        .title{
            font-size: 15px;
            font-weight: bold;
            color: black;
        }
        .rate{
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 10px;
            color: #333;
            .stars{
                color: #ffbe00;
                margin-right:10px ;
            }
        }
    }
}
</style>