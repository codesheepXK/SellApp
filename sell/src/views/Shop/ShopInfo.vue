<template>
  <div class="infoBox">
    <section>
      <img src="@/assets/MDL.jpg">
      <h3>{{shopInfo.title}}</h3>
      <p><span>商家简介：</span>{{shopInfo.description}}</p>
      <p><span>商家电话：</span>{{shopInfo.tel}}</p>
      <p><span>商家地点：</span>{{shopInfo.site}}</p>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            shopInfo:{
              // imagePath:"",
              title:"麦当劳",
              description:"麦当劳是全球大型跨国连锁餐厅,1955年创立于美国芝加哥 ,在世界上大约拥有3万间分店。主要售卖汉堡包,以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐 ",
              tel:"1008685732",
              site:"万达一号门旁"
            }
        }
    }
}
</script>

<style lang="less" scoped>
.infoBox{
  width: 100%;
  height:60%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  section{
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img{
      width: 200px;
      height: 150px;
    } 
    h3{
      font-size: 25px;
      font-weight: bold;
    }
    p{
      width: 80%;
      color: #333;
      font-size: 15px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      span{
        font-weight: bold;
      }
    }
  }
}
</style>