<!-- 上传 -->
<template>
<div>
  <!-- 上传图片 -->
  <!-- <el-upload
    action="https://httpbin.org/post"
    list-type="picture-card"
    accept=".png, .jpg, .gif, .txt"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog> -->
  <!-- 上传文件 -->
  <el-upload
    class="upload-demo"
    action="https://httpbin.org/post"
    :on-preview="handlePreview"
    :before-upload="beforeAvatarUpload"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>
</template>

<script>
export default {
  name: "",

  components: {},

  props: {},

  data() {
    return {
      // 上传图片
      dialogImageUrl: "",
      dialogVisible: false,
      // 上传文件
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    // 上传图片,
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 300;
      if (!isLt2M) {
        this.$message.error('文件大小不能超过 300MB!');
      }
      return isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
};
</script>

<style lang='scss'>
.el-upload-list.el-upload-list--picture-card
  .el-upload-list__item
  .el-upload-list__item-thumbnail,
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
  width: 78px !important;
  height: 78px !important;
}
</style>
