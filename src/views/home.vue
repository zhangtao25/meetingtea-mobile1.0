<style>
  #testhome{
    background-color: rgb(244, 244, 244);
    column-count: 2;
    column-gap: 1em;
  }
</style>
<template>
  <div id="testhome">
    <image-text-item v-for="(item,index) of imageTextData" :image-text-data="item" :key="index"></image-text-item>
  </div>
</template>
<script>
  import ImageTextItem from './home/image-text-item'
  export default {
    components:{
      'image-text-item': ImageTextItem
    },
    data(){
      return {
        imageTextData: [],
        isRander:false
      }
    },
    mounted(){
      // this.imageTextData = this.testData.fourColumnNotes[0]
      for (let j=0;j<this.testData.fourColumnNotes.length;j++){
        for (let i=0;i<this.testData.fourColumnNotes[j].length;i++){
          this.imageTextData.push(this.testData.fourColumnNotes[j][i])
        }
      }

      this.isRander = true
    }
  }
</script>