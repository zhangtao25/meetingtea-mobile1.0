<style>
  .mine-header{
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    font-size: .2rem;
    align-items: center;
    /*border-bottom: 1px solid #e6e6e6;*/
  }
  .mine-header i{
    font-size: .5rem;
    color: #999;
  }
  .mine-header>div>p{
    text-align: center;
  }
  .mine-header .nickname{
    font-size: .4rem;
    color: #333333;
  }
  .mine-header .user-id{
    font-size: .28rem;
    color: #999;
  }
  .scale {
    position: relative;
  }

  .scale:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #e6e6e6;
    transform: scaleY(.3);/*将边框线沿着垂直方向缩小到0.3倍*/
    transform-origin: 0 bottom;/*因为是下边框线，所以沿着底部靠齐*/
  }
</style>
<template>
  <div class="mine-header scale">
    <i class="icon-liebiao iconfont"></i>
    <div>
      <p class="nickname">张涛</p>
      <p class="user-id">小红书号: 905019230</p>
    </div>
    <i class="icon-zhuanfa iconfont"></i>
  </div>

</template>