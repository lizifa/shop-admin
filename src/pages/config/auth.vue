<template>
  <div class="config-auth">
    <div>
      <el-button type="primary" size="mini" @click="handleOpen">新建</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="菜单名称"> </el-table-column>
      <el-table-column prop="name" label="权限标志"> </el-table-column>
      <el-table-column prop="address" label="路由"> </el-table-column>
      <el-table-column prop="address" label="可操作权限"> </el-table-column>
      <el-table-column prop="address" label="排序"> </el-table-column>
      <el-table-column prop="address" label="创建日期"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleOpen">取 消</el-button>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { TABLE_DATA } from '@/utils/constant'

export default {
  setup() {
    let tableData = reactive(TABLE_DATA)
    let dialogVisible = ref(dialogVisible)
    let handleClose = () => {
      dialogVisible.value = false
    }
    let handleOpen = () => {
      dialogVisible.value = true
    }
    return { tableData, dialogVisible, handleClose, handleOpen }
  }
}
</script>

<style lang="less" scoped>
.config-auth {
  margin: 15px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
  padding: 15px;
}
</style>
