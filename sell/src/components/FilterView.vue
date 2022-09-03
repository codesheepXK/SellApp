<template>
<div :class="{'open':isSort||isScreen}" @click.self="hide">
  <div class="filterBox">
    <aside class="filter">
        <div class="filter-nav" v-for="(item,index) in FilterData" :key="index"
        :class="{'filter-bold':currentFliter==index}"
        @click="filterSort(index)">
            <span>{{item.title}}</span>
            <i v-if="item.icon" :class=" 'fa fa-' + item.icon"></i>
        </div>
    </aside>
    <section class="filter-extend" v-if="isSort">
        <ul>
            <li v-for="(item,index) in sortBy" :key="index"
                @click="selectSort(item,index)">
                <span :class="{'selectName':currentSort==index}">{{item.title}}</span>
                <i  v-show="currentSort==index"class="fa fa-check"></i>
            </li>
        </ul>
    </section>

     <section class="filter-extend" v-if="isScreen">
        <div class="fileSort">
            <div v-for="(screen,index) in screenBy" :key="index" class="moreFliter">
                <p class="screen-title">{{screen.title}}</p>
                <ul>
                    <li v-for="(item,i) in screen.data" :key="i"
                        :class="{'selected':item.select}"
                        @click="selectScreen(item,screen)">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btns">
            <span @click="clearAll" :class="{'edit': edit }" class="clear">清除</span>
            <span @click="hide" class="ok">确定</span>
        </div>
    </section>
  </div>
  <!-- 导航 -->
</div>
</template>

<script>
export default {
    data(){
        return{
            FilterData:[
                {title:"综合排序",icon:"caret-down"},
                {title:"距离最近"},
                {title:"品质联盟"},
                {title:"筛选",icon:"filter"}
            ],
            sortBy:[
                {title:"综合排序",code:""},
                {title:"好评最多",code:""},
                {title:"配送最快",code:""},
                {title:"配送费低",code:""},
                {title:"人均升序",code:""},
                {title:"人均降序",code:""},

            ],
            screenBy:[
                {
                    title:"商家服务(可多选)",
                    id:"1",
                    data:[{name:"平台专送",select:false},{name:"新店",select:false},{name:"品牌商家",select:false},{name:"开发票",select:false},{name:"运送险",select:false}]
                },
                {
                    title:"优惠活动",
                    id:"2",
                    data:[{name:"首单立减",select:false},{name:"满减优惠",select:false},{name:"赠品优惠",select:false},{name:"配送费优惠",select:false},{name:"特价商品",select:false},{name:"进店送红包",select:false}]
                },
                {
                    title:"价格区间",
                    id:"3",
                    data:[{name:"￥0-￥20",select:false},{name:"￥20-￥40",select:false},{name:"￥40-￥60",select:false},{name:"￥80-￥100",select:false},{name:"￥100以上",select:false}]
                }
            ],
            currentFliter:0,
            isSort:false,
            currentSort:0,
            isScreen:false
        }
    },
    computed:{
        edit(){
            let edit=false;
            this.screenBy.forEach(screen => {
                screen.data.forEach(ele=>{
                    if(ele.select){
                        edit=true;      
                    }
                });
            })
            return edit;
        }
        
    },
    methods:{
        
        filterSort(index){
            this.currentFliter=index;
            switch(index){
                case 0 :
                    this.isSort=true;
                    this.isScreen=false;
                    break;
                case 3:
                    this.isScreen=true;
                    this.isSort=false;
                    break;
                default:
                    this.hide();
                    break;           
            }
        },
        selectSort(item,index){
            this.currentSort=index;
            this.FilterData[0].title=item.title;
            this.hide();
        },
        selectScreen(item,screen){
            if(screen.id!= 1){
                //单选
                screen.data.forEach(ele=>{
                    ele.select=false
                })
            }
            item.select=!item.select;

        },
        clearAll(){
            this.screenBy.forEach(screen => {
                screen.data.forEach(ele=>{
                    ele.select=false
                });
            })
        },
        hide(){
            this.isScreen=false;
            this.isSort=false;
            this.clearAll()
        }
    }
}
</script>

<style lang="less" scoped>
.open{
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3 ease-in-out;
    z-index: 3;
}
.filterBox{
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    position: sticky;
    top:65px;
    left: 0px;
    z-index:100;
}
.filter{
    border-bottom: 1px solid #ddd;
    z-index: 101;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.filter-nav{
    flex: 1;
    text-align: center;
    color: #666;
    font-size: 15px;

}
.filter-nav i{
    width:5px;
    height: 10px;
    fill:#333;
    will-change: transform;
    margin-left: 3px;
}
.filter-bold{
    font-weight: bold;
    color: #333;
}
.filter-extend {
    box-sizing: border-box;
    background-color: #fff;
    color: #333;
    padding: 10px;
    position: absolute;
    width: 100%;
    z-index: 4;
    left: 0;
    top:40px;
}
.filter-extend li{
    position: relative;
    font-size: 16px;
    padding-left: 15px;
    line-height: 30px;
    overflow: hidden;
}
.fa-check{
    float: right;
    color: #009eef;
    margin-right: 20px;
    line-height: 30px;
}
.selectName{
    font-weight: bold;
    color: #009eef;
}
.filterSort{
    background: #fff;
    line-height: normal;
}
.moreFliter{
    .screen-title{
        font-size: 18px ;
        font-weight: bold;
        margin: 10px 0;
    }
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        font-size: 16px;
        li{
            box-sizing: border-box;
            width: 30%;
            height: 30px;
            line-height: 30px;
            background: #f4f4f4;
            margin: 5px;
        }
    }
}
.btns{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fafafa;
    line-height: 40px;
    margin-top: 10px;
    span{
        font-size: 10px;
        text-align: center;
        text-decoration: none;
        flex: 1;
    }
     .clear{
            color: #000;
            background-color: #009eef;
    }
    .ok{
        color: #fff ;
        background-color: #00d762;
        // border: 1px solid #00d762;
    }
}
.selected{
    color: #3190e8 !important;
    background-color: #edf5ff ;
}
.edit{
    color: #fff !important
}
</style>