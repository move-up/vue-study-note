<!-- btn -->

<script>
export default {
  name: 'selectBtn',
 render(h) {
  return h('div',{
   'class': {
    btn: true,
    success: this.type === 'success',
    error: this.type === 'error',
    warn: this.type === 'warn',
    default: this.type === 'default'
   },
   domProps: {
    innerHTML: this.$slots.default[0].text
   },
   on: {
    click: this.clickHandle
   }
  })
 },
 methods: {
  clickHandle() {
   // dosomething
  //  console.log('你点击的按钮是：' + this.text)
  }
 },
 props: {
  type: {
   type: String,
   default: 'default'
  },
  text: {
   type: String,
   default: 'default'
  }
 }
};
</script>

<style lang='scss' scoped>
.btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 5px;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 10px;
}
.btn.success {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}
.btn.error {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.btn.warn {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}
</style>
