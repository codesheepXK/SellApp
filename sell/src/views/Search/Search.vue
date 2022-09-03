<template>
<div class="searchBox">
    <mt-header title="搜索" >
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    <div class="search-header">
            <form class="search-wrap">
                <i class="fa fa-search"></i>
                <input type="text" v-model="keyWord" placeholder="请输入商家或商品信息">
                <button>搜索</button>
            </form>
    </div>
    <div class="shop" >
        <SearchResult/>
    </div>  
</div>

</template>

<script>
import SearchResult from "./SearchResult.vue"
export default {
    data(){
        return{
            keyWord:""
        }
    },
    components:{
        SearchResult
    }
}
</script>

<style lang="less" scoped>
.searchBox{
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
}
.mint-header{
    width: 100%;
    height: 40px;
    font-size: 18px;
}
.search-header{
    box-sizing: border-box;
    background-color: #fff;
    padding:  0 20px;
    // border-bottom: 1px solid rgba(0,0,0,0.08 )
}
.search-wrap{
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px ;
    .fa-search{
        width: 15px;
        height: 15px;
        color: #888;
        position:absolute;
        top:24px;
        left: 17px;
    }
    input{
        flex-grow: 1;
        height: 30px;
        border-radius: 15px;
        background-color: #f8f8f8;
        color: #666;
        font-size: 15px;
        outline: none;
        border: none;
        padding: 5px 10px 5px 25px;
    }
    button{
        width: 50px;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 15px;
        background: #009eef;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        margin-left: 20px;
        
    }
}
.shop{
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
}
</style>