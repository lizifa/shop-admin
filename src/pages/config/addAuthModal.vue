<template>
  <el-dialog
    title="新建菜单"
    v-model="visible"
    width="700px"
    :before-close="handleClose"
  >
    <el-form :model="formData" label-width="auto">
      <el-form-item
        prop="menuType"
        label="菜单类型"
        :rules="[
          { required: true, message: '请选择菜单类型', trigger: 'blur' }
        ]"
      >
        <el-radio-group v-model="formData.menuType" size="mini">
          <el-radio-button label="menu">菜单</el-radio-button>
          <el-radio-button label="button">按钮</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        prop="menuName"
        label="菜单名称"
        :rules="[
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ]"
      >
        <el-input v-model="formData.menuName"></el-input>
      </el-form-item>
      <el-form-item
        prop="menuLink"
        label="路由地址"
        :rules="[
          { required: true, message: '请输入路由地址', trigger: 'blur' }
        ]"
      >
        <el-input v-model="formData.menuLink"></el-input>
      </el-form-item>
      <el-form-item
        prop="authMark"
        label="权限标志"
        :rules="[
          { required: true, message: '请输入权限标志', trigger: 'blur' }
        ]"
      >
        <el-input v-model="formData.authMark"></el-input>
      </el-form-item>
      <el-form-item
        prop="sort"
        label="菜单排序"
        :rules="[
          { required: true, message: '请输入菜单排序', trigger: 'blur' }
        ]"
      >
        <el-input-number
          v-model="formData.sort"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose" size="mini">取 消</el-button>
        <el-button type="primary" @click="handleSure" size="mini"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { reactive, ref } from 'vue'
const pureFormData = {
  menuName: '',
  menuType: 'menu',
  menuLink: '',
  authMark: '',
  sort: ''
}
export default {
  emits: ['handleOpen'],
  setup() {
    let visible = ref(false)
    let formData = reactive(pureFormData)

    let handleClose = () => {
      visible.value = false
    }

    let handleSure = () => {
      visible.value = true
    }

    let show = params => {
      visible.value = true
      console.log(params)
    }

    return {
      formData,
      handleClose,
      handleSure,
      visible,
      show
    }
  }
}
</script>
