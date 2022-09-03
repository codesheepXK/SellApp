<template>
   <section class="shopBox">
    <div class="shopInfo" @click="goToShop">
        <!-- 左侧logo -->
        <div class="logoContainer" >
            <img src="../assets/MDL.jpg" >
        </div>
        <!-- 右侧介绍 -->
        <div class="shopMain">
            <!-- 第一行 -->
            <div class="shopName">
                <span>{{restaurant.name}}</span>
            </div>
            <!-- 第二行 -->
            <div class="rateWrap">
                <!-- 星级 -->
                <div class="rate">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <!-- 月售 -->
                <span >5.0</span>
                <span class="monthAccount">月售8080单</span>
                <div v-if="restaurant.deliveryByPlat" class="delivery">
                    <span class="icon-hollow">平台专送</span>
                </div>
            </div>
            <!-- 第三行 -->
            <div class="moneyLimit">
                <div >
                    <span>￥{{restaurant.miniAccount}}起送</span>
                    <span style="padding-left:5px">配送费￥{{restaurant.deliveryFee}}</span>
                </div>
                <div class="distance">
                    <span>1km</span>
                    <span style="padding-left:5px">50分钟</span>
                </div>
            </div>
        </div>
    </div>
   </section>
</template>

<script>
export default {
    props:{
        restaurant:Object
    },
    methods:{
        goToShop(){
            this.$router.push('/shop')
        }
    }
}
</script>

<style lang="less" scoped>
.shopBox{
    width: 100%;
    background: #fff;
    color: #666;
    padding:10px 0;
    border-bottom:1px solid #eee
}
.shopInfo{
    display: flex;
    justify-content: flex-start;
    padding: 0 20px;
    align-items: stretch;
    .logoContainer{
        width: 60px;
        height: 60px;
        img{
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius:5px ;
        }
    }
    .shopMain{
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        flex-direction: column;
        flex-grow: 1;
        font-size: 5px;
        padding-left: 20px;
        .shopName{
            align-items: center;
            color: #333;
            font-size: 15px;
            font-weight: 700;
            span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .rateWrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            .rate{
                // margin-right: 20px;
                color: #ffbe00;
            }
            
            .delivery{
                display: flex;
                align-items: center;
                .icon-hollow{
                    color: #fff;
                    background-color: #2395ff;
                    padding: 2px;
                    box-sizing: border-box;
                }
            }
        }
        .moneyLimit{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .distance{
                color: #999;
                
            }
        }
    }
}

</style>