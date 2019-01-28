<style>
  .user-info{
    display: flex;
    justify-content: space-between;
    padding: .3rem .4rem;
  }
  .user-info>.head-portrait{
    border-radius: 50%;
    overflow: hidden;
  }
  .user-info>.head-portrait img{
    width: 2rem;
    height: 2rem;
    display: block;
  }
  .user-info>.right>.indicators{
    display: flex;
  }
  .user-info>.right>.indicators>li{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .user-info>.right>.indicators>li:nth-child(1){
    margin-left: .3rem;
  }
  .user-info>.right>.indicators>li:nth-child(2){
    margin-left: 1.4rem;
  }
  .user-info>.right>.indicators>li:nth-child(3){
    margin-left: 1rem;
  }
  .user-info>.right>.indicators>li>span:nth-child(1){
    font-size: .3rem;
  }
  .user-info>.right>.indicators>li>span:nth-child(2){
    font-size: .28rem;
  }

  .user-info>.right>.personal-info-and-settings{
    display: flex;
    margin-top: .3rem;
  }
  .user-info>.right>.personal-info-and-settings>li:nth-child(1){
    border: 0.5px solid #333333;
    border-radius: .35rem;
    height: .7rem;
    width: 5.1rem;
    text-align: center;
    line-height: .7rem;
    box-sizing:border-box;
    margin-right: .2rem;
  }
  .user-info>.right>.personal-info-and-settings>li:nth-child(2){
    width: .8rem;
    border-radius: .35rem;
    height: .7rem;
    border: 1px solid #333333;
    box-sizing:border-box;
    text-align: center;
    line-height: .7rem;
  }
  .user-info>.right>.personal-info-and-settings>li:nth-child(2) .icon-shezhi{
    font-size: .4rem;
  }
</style>
<template>
  <div class="user-info">
    <div class="head-portrait">
      <!--<img src="./../../assets/images/test-touxiang.png" alt="">-->
      <el-upload
        class="avatar-uploader"
        action=""
        :http-request="fn"
        :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="right">
      <ul class="indicators">
        <li>
          <span>21</span>
          <span>关注</span>
        </li>
        <li>
          <span>0</span>
          <span>粉丝</span>
        </li>
        <li>
          <span>0</span>
          <span>获赞与收藏</span>
        </li>
      </ul>
      <ul class="personal-info-and-settings">
        <li>个人资料</li>
        <li>
          <i class="icon-shezhi iconfont"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        imageUrl:''
      }
    },
    mounted(){
      axios.get('/api/mobile-picture/init-touxiang').then(res=>{
        console.log(res)
        this.imageUrl = this.backendInterfaceAddress + res.data
      })
    },
    methods:{
      fn(val){
        console.log(val)
        let formData = new FormData();
        formData.append('avatar', val.file);
        axios.post('/api/mobile-picture/uploader',formData).then(res=>{
          // console.log(res,this.backendInterfaceAddress)
          this.imageUrl = this.backendInterfaceAddress + res.data.filePath
        })
      }
    }
  }
</script>