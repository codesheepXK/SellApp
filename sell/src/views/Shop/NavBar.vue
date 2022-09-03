<template>
  <div class="navBox">
    <router-link to="/shopOrder" class="item">
        点餐
        <i class="line"></i>
    </router-link>
    <router-link to="/shopInfo" class="item">
        简介
        <i class="line"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.navBox{
    display: flex;
    width: 100%;
    line-height: 50px;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    position: sticky;
    top: 0px;
    z-index:15;
    .item{
        flex: 1;
        text-align: center;
        font-size: 15px;
        text-decoration: none;
        color: #666;
        position: relative;
    }
}
.active{
    color: #333;
    font-weight: bold;
    .line{
        width: 30px;
        height: 1px;
        background: #2395ff;
        display: inline-block;
        position: absolute;
        left:47%;
        bottom:0px;
        margin-left: -10px;
    }

}
</style>