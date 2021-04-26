<template>
  <div class="config-auth">
    <div class="action-zone">
      <el-button type="primary" size="mini" @click="handleOpen">新建</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="菜单名称" width="180">
      </el-table-column>
      <el-table-column prop="menuMark" label="权限标志" width="180">
      </el-table-column>
      <el-table-column prop="MenuLink" label="路由"> </el-table-column>
      <el-table-column prop="auth" label="可操作权限"> </el-table-column>
      <el-table-column prop="sort" label="排序"> </el-table-column>
      <el-table-column prop="createTime" label="创建日期"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            class="edit-icon"
            @click="updateRowAction(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            class="delete-icon"
            icon="el-icon-delete"
            @click="deleteRowAction(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <dialogModel ref="refAuthDialog" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { TABLE_DATA } from '@/utils/constant'
import dialogModel from './addAuthModal'
export default {
  components: {
    dialogModel
  },
  setup() {
    let tableData = reactive(TABLE_DATA)
    let refAuthDialog = ref()

    let handleOpen = () => {
      refAuthDialog.value.show()
    }
    let load = (tree, treeNode, resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ])
      }, 1000)
    }

    let updateRowAction = row => {
      console.log(row)
    }

    let deleteRowAction = row => {
      console.log(row)
    }

    return {
      tableData,
      refAuthDialog,
      handleOpen,
      load,
      updateRowAction,
      deleteRowAction
    }
  }
}
</script>

<style lang="less">
.config-auth {
  margin: 15px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
  padding: 15px;
  .edit-icon {
    color: @primary;
  }
  .delete-icon {
    color: @warning;
  }
  .action-zone {
    margin-bottom: 15px;
  }
}
</style>
