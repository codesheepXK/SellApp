<template>
  <mt-header title="我的订单" class="header">
  <router-link to="/home" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0px;
    left: 0px;
    z-index: 5;
    background: #009eef;
    font-size: 20px;
}
</style>