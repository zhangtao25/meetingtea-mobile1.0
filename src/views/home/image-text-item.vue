<style>
  .image-text-item{
    /*width: 49vw;*/
    background-color: white;
    border-radius: .2rem;
    overflow: hidden;
    margin-top: .1rem;
    break-inside: avoid;
  }
  .image-text-item>img{
    width: 100%;
    /*height: 10px;*/
  }
  .image-text-item>.title{
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: .35rem;
    padding: 0 .3rem;
  }
  .image-text-item>.wrap{
    display: flex;
    justify-content: space-between;
    /*margin-top: .3rem;*/
    padding: .3rem;
  }
  .image-text-item>.wrap > .l,.image-text-item>.wrap > .r{
    display: flex;
    align-items: center;
  }
  .image-text-item>.wrap > .l >img{
    border-radius: 50%;
  }
  .image-text-item>.wrap img{
    width: .5rem;
    height: .5rem;
  }
  .image-text-item>.wrap span{
    font-size: .3rem;
    margin-left: .1rem;
  }
</style>
<template>
  <div class="image-text-item">
    <img :src="imageTextData['imagesList'][0]['url']" alt="">
    <p class="title">
      {{imageTextData['title']}}
    </p>
    <div class="wrap">
      <div class="l">
        <img :src="imageTextData['user']['image']" alt="">
        <span>{{imageTextData['user']['nickname']}}</span>
      </div>

      <div class="r">
        <span>{{imageTextData['likes']}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['imageTextData']
  }
</script>