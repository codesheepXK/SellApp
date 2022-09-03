<template>
  <div class="goods">
    <!-- 商品分类 -->
    <div class="menuView">
        <!-- 左侧列表 -->
        <div class="menuList">
            <ul>
                <li v-for="(item,index) in menuList" :key="index" >
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
        <!-- 右侧展示 -->
        <div class="foods">
            <ul>
                <li class="foodList" v-for="(item,index) in menuList" :key="index" >
                    <!-- 分类名称 -->
                    <div class="categoryTitle">
                        <strong>{{item.title}}</strong>
                    </div>
                    <!-- 具体内容 -->
                    <div class="foodDetail" v-for="(food,i) in item.foods" :key="i">
                        <!-- 图片 -->
                        <img src="@/assets/logo.png">
                        <!-- 介绍 -->
                        <div class="foodWord">
                            <section class="foodInfo">
                                <h4>{{food.name}}</h4>
                                <p class="foodDes">{{food.description}}</p>
                            </section>
                            <div class="foodPrice">
                                <span class="price">￥{{food.price}}</span>
                                <!-- 购买数量 -->
                                <div class="numBox">
                                    <span @click.stop="decrease(index,i)" class="btn btn-minus" v-if="food.count>0>0">
                                        <i class="fa fa-minus"></i>
                                    </span>
                                    <span class="num" v-if="food.count>0">
                                        {{food.count}}
                                    </span>
                                    <span @click.stop="add(index,i)" class="btn btn-add">
                                        <i class="fa fa-plus-circle"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <ShopCar :total="total"></ShopCar>
  </div>
</template>

<script>
import ShopCar from './ShopCar.vue'
export default {
    // name:"shopOrder",
    data(){
        return{
            total:0,
            menuList:[
                {title:"套餐汉堡",foods:[{name:"套餐一",description:"便宜好吃",price:25,count:0},{name:"套餐二",description:"物美价廉",price:35,count:0}]},
                {title:"单点汉堡",foods:[{name:"香辣炸鸡堡",description:"微辣",price:15,count:0},{name:"板烧鸡腿堡",description:"还行",price:20,count:0}]},
                {title:"随心小吃",foods:[{name:"薯条",description:"一根一根",price:10,count:0}]},
                {title:"清凉饮品",foods:[{name:"可乐",description:"肥宅快乐水",price:3,count:0}]},
                {title:"会员专享",foods:[{name:"会员套餐",description:"还行",price:55,count:0}]},
                {title:"现磨咖啡",foods:[{name:"美式咖啡",description:"有点苦",price:8,count:0}]},
                {title:"1+1随心配",foods:[{name:"双层吉士汉堡配小吃",description:"平民套餐",price:12.9,count:0}]},
                {title:"儿童套餐",foods:[{name:"儿童套餐",description:"专为儿童准备",price:15,count:0}]},
                
            ]
        }
    },
    components:{
        
        ShopCar
    },
    methods:{
        CalcTotal(){
            let sum=0;
            this.menuList.forEach(menu =>{
                menu.foods.forEach(food =>{
                    if(food.count>0){
                        sum+=food.count*food.price
                    }
                })
            })
            this.total=sum;
        },
        decrease(index,i){
            this.menuList[index].foods[i].count--;
            this.CalcTotal();
        },
        add(index,i){
            this.menuList[index].foods[i].count++;
            this.$nextTick(() => {
                this.CalcTotal();
            })
        },
    }
}
</script>

<style lang="less" scoped>
.goods{
    width: 100%;
    height: calc(100% - 50px);
    position: relative;
}
.menuView{
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 60px;
    background-color: #fff;
    display: flex;
    .menuList{
        box-sizing: border-box;
        overflow-y:auto ;
        width: 25%;
        height: 100%;
        background-color: #f8f8f8;
        padding-bottom: 55px;
        li{
            padding: 10px 0 10px 15px;
            font-size: 10px;
            color:#666;
            line-height: 2;
        }
    }
}
.foods{
    box-sizing: border-box;
    overflow-y: auto;
    width: 75%;
    height: 100%;
    .foodList{
        .categoryTitle{
            display: flex;
            align-items: center;
            overflow: hidden;
            border-bottom:1px solid rgba(0,0,0,0.08);
            strong{
                font-size: 15px;
                margin: 10px 0 10px 5px;
                
            }
        }
        .foodDetail{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            border-bottom:1px solid rgba(0,0,0,0.08);
            img{
                width: 60px;
                height: 60px;
                margin: 0 20px 0 10px;
            }
            .foodWord{
                flex: 1;
                .foodInfo{        
                    h4{
                        width:80%;
                        font-weight: 700;
                        font-size: 18px;
                        color: #333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        
                    }
                    .foodDes{
                        color: #999;
                        font-size: 5px;
                        margin: 10px 0; 
                    }
                }
                .foodPrice{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-right: 20px;
                    .price{
                        font-size: 10px;
                        color: #ff5339;
                        display: flex;
                        align-items: baseline;
                    }
                    .numBox{
                        display: inline-block;
                        align-items: center;
                        .btn{
                            width:15px;
                            height: 15px;
                            display: inline-block;
                            vertical-align: middle; 
                            i{
                                    color: rgb(35,149,255);
                                    vertical-align: middle;
                                    font-size: 15px;
                            }
                        }
                        .btn-minus{
                            text-align: center;
                            i{
                                font-size: 5px;
                                
                            }
                        }
                        .num{
                            display: inline-block;
                            width: 30px;
                            color: rgba(0,0,0,0.87);
                            font-size: 15px;
                            text-align: center;
                            vertical-align: middle;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
    }
}

</style>