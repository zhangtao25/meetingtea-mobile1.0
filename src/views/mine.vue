<template>
  <div id="mine">
    <mine-header></mine-header>
    <user-info></user-info>
    <!--<img width="1000" src="./../assets/images/QQ20190127-0.png" alt="">-->
  </div>
</template>
<script>
  import MineHeader from './mine/mine-header'
  import UserInfo from './mine/user-info'
  export default {
    components:{
      'mine-header': MineHeader,
      'user-info': UserInfo
    }
  }
</script>