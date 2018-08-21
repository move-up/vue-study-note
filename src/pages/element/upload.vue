<!-- 上传 -->
<template>
<div>
  <el-upload
    action="https://httpbin.org/post"
    list-type="picture-card"
    accept=".png, .jpg, .gif, .txt"
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

export default {
  name: '',

  components: {
  },

  props: {},

  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang='scss'>
.el-upload-list.el-upload-list--picture-card .el-upload-list__item .el-upload-list__item-thumbnail,
.el-upload-list.el-upload-list--picture-card .el-upload-list__item {
  width: 100px;
  height: 100px;
}
.el-upload.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 98px;
}
.el-upload-list--picture-card .el-progress,
.el-upload-list--picture-card .el-progress-circle {
  width: 78px!important;
  height: 78px!important;
}
</style>
