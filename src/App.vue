<template>
  <div id="app">
    <router-view/>
    <bottom-tabbar></bottom-tabbar>
  </div>
</template>
<script>
  import BottomTabbar from './components/bottom-tabbar'
  export default {
    components:{
      'bottom-tabbar': BottomTabbar
    },
    mounted(){
      this.setHtmlFontSize();
      window.onresize=()=>this.setHtmlFontSize();
    },
    methods:{
      setHtmlFontSize(){
        document.getElementsByTagName("html")[0].style.fontSize = document.body.clientWidth/10+"px";
      }
    }
  }
</script>