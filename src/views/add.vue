<template>
  <div>
    <el-upload
      action=""
      :http-request="fn"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      fn(val){
        console.log(val)
        let formData = new FormData();
        formData.append('avatar', val.file);
        axios.post('/api/mobile-picture/uploader',formData)
            .then(response=>{
              console.log(response.data);
            })
      }
    }
  }
</script>