<template>
    <div class="footer">
        <span class="cartIcon">
            <i class="fa fa-cart-plus"></i>
        </span>
        <div class="cartInfo">
            <p class="total">￥{{total}}</p>
            <p class="delivery">另需配送费7元</p>
        </div>
        <button class="submit" @click="submit">
            <span>结算</span>
        </button>
    </div>
</template>

<script>
export default {
    name:"shopCar",
    data(){
        return{ 
            
        }
    },
    props:{
        total:Number
    },
    methods:{
        submit(){
            alert("下单成功")
        }
    }
}
</script>

<style lang="less" scoped>

.footer{
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: rgba(61,61,63);
    height: 55px;
    z-index: 999;
    .cartIcon{
        position: absolute;
        left: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        background-color: #3190e8;
        border: 1px solid #444;
        border-radius: 50%;
        i{
            position: absolute;
            top: 7px;
            left: 7px;
            color: #fff;
            font-size: 30px;
        }
    }
    .cartInfo{
        flex: 1;
        margin-left: 80px;
        .total{
            font-size: 15px;
            line-height: normal;
            color: #fff;
            margin-bottom:5px ;
        }
        .delivery{
            color: #999;
            font-size: 5px;
        }
    }
    .submit{
        height: 100%;
        width: 100px;
        background-color: #38ca73;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        border: none;
        outline: none;
    }
}
</style>