<!-- 上传 -->
<template>
<div>
  <el-upload
    action="https://jsonplaceholder.typicode.com/posts/"
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

<style lang='scss' scoped>
.el-upload-list--picture-card .el-upload-list__item .el-upload-list__item-thumbnail {
  width: auto;
  height: 148px;
  margin: 0 auto;
}
</style>
