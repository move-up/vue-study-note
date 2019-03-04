<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const padding = 15 /* tag's padding */

export default {
  name: 'scrollPane',
  data() {
    return {
      left: 0
    }
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      /* wheelDelta值为正（120）向上滚动，值为负（-120）向下滚动；deltaY与wheelDelta相反 */
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth

      if (eventDelta > 0) {
        /* 向上滚动 */
        this.left = Math.min(0, this.left + eventDelta)
      } else {
        /* 向下滚动 */
        if ($containerWidth - padding < $wrapperWidth) {
        /* tags宽度超过屏幕宽度 */
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
            /* 如果已经滑到元素最右端 */
            this.left = this.left
          } else {
            /* tags宽度超过屏幕宽度并且还没滑到最右端每滑一次减120px */
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding)
          }
        } else {
        /* tags宽度小于屏幕宽度 */
          this.left = 0
        }
      }
    },

    moveToTarget($target) {
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth

      if ($targetLeft < -this.left) {
        // tag in the left
        this.left = -$targetLeft + padding
      } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
      }g
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .scroll-wrapper {
    position: absolute;
  }
}
</style>
