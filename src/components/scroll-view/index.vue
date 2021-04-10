<template>
  <div id="scroll-view" :class="[`scroll-view ${className}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  setup() {}
}
</script>

<style lang="less">
#scroll-view {
  height: 100%;
  overflow: scroll;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #555;
  }
}
</style>
