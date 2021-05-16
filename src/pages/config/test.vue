<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      ref="treeRef"
    >
    </el-tree>
    <div><el-button type="text" @click="onClick">click</el-button></div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    let treeRef = ref()
    let data = reactive([
      {
        id: 1,
        label: '一级 1',
        children: [
          {
            id: 4,
            label: '二级 1-1',
            children: [
              {
                id: 9,
                label: '三级 1-1-1'
              },
              {
                id: 10,
                label: '三级 1-1-2'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: '一级 2',
        children: [
          {
            id: 5,
            label: '二级 2-1'
          },
          {
            id: 6,
            label: '二级 2-2'
          }
        ]
      },
      {
        id: 3,
        label: '一级 3',
        children: [
          {
            id: 7,
            label: '二级 3-1'
          },
          {
            id: 8,
            label: '二级 3-2'
          }
        ]
      }
    ])
    let defaultProps = reactive({
      children: 'children',
      label: 'label'
    })
    function onClick() {
      console.log(treeRef.value.getCheckedNodes())
    }
    return {
      data,
      defaultProps,
      treeRef,
      onClick
    }
  }
}
</script>
<style lang="less">
.el-tree .el-tree-node .is-leaf + .el-checkbox .el-checkbox__inner {
  display: inline-block;
}
.el-tree .el-tree-node .el-checkbox .el-checkbox__inner {
  display: none;
}
</style>
