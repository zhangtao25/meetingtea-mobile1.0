<style>
  #testhome{
    background-color: rgb(244, 244, 244);
    column-count: 2;
    column-gap: .1rem;
    padding: .1rem;
  }
</style>
<template>
  <div id="testhome">
    <image-text-item v-for="(item,index) of imageTextData" :image-text-data="item" :key="index"></image-text-item>
  </div>
</template>
<script>
  import ImageTextItem from './home/image-text-item'
  import NotesService from './../service/notes'
  export default {
    components:{
      'image-text-item': ImageTextItem
    },
    data(){
      return {
        imageTextData: [],
        fourColumnNotes:[],
        isRander:false
      }
    },
    mounted(){
      NotesService.getAllNotes().then(res=>{
        console.log(res)
        this.imageTextData = res.data
        // this.fourColumnNotes = res.data
        // for (let j=0;j<this.fourColumnNotes.length;j++){
        //   for (let i=0;i<this.fourColumnNotes[j].length;i++){
        //     this.imageTextData.push(this.fourColumnNotes[j][i])
        //   }
        // }
      });

      this.isRander = true
    }
  }
</script>