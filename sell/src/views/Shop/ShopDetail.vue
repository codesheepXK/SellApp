<template>
  <div class="shopBox">
        <div class="header">
            <div class="logoContainer">
                <img src="@/assets/MDL.jpg">
            </div>
            <div class="title">麦当劳</div>
            <div class="rateWrap">
                <span >评分5.0</span>
                <span>月售8080单</span>
                <span>配送约45分钟</span>
            </div>
            <div class="back" @click="$router.push('/home')">
                <i class="fa fa-chevron-left"></i>
            </div>
        </div>
        <navBar></navBar>
        <router-view></router-view>
  </div>
</template>

<script>
import navBar from './NavBar.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        navBar
    }

}
</script>

<style lang="less" scoped>
.shopBox{
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    .header{
        width: 100%;
        height: 160px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
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
        .title{
            margin-top:10px; 
            font-size: 30px;
            font-weight: bold;
        }
        .rateWrap{
            width: 55%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            overflow: hidden;
            color: #333;
            margin-top:20px; 
            font-size: 10px;
        }
        .back{
            position: absolute;
            top:10px;
            left: 10px;
            color: #333;
        }
    }
}
</style>