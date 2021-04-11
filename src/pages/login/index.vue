<template>
  <div id="login">
    <el-row>
      <el-col :span="14"></el-col>
      <el-col :span="10">
        <el-form :model="ruleForm" ref="loginRef" class="box">
          <div class="hello">Hello!</div>
          <div class="title">陌生人,茫茫人海，有缘相见~</div>
          <el-form-item
            prop="userName"
            :show-message="false"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ]"
          >
            <el-input
              type="text"
              v-model="ruleForm.userName"
              :show-message="false"
              prefix-icon="el-icon-s-custom"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            inline-message
            :show-message="false"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' }
            ]"
          >
            <el-input
              type="password"
              v-model="ruleForm.password"
              prefix-icon="el-icon-s-opportunity"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin: 0">
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              round
              block
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { localSet } from '@/utils'
import { useStore } from 'vuex'

export default {
  name: 'login',
  setup() {
    let store = useStore()
    let router = useRouter()
    let loginRef = ref()
    let ruleForm = reactive({
      userName: 'xiaoshubao',
      password: 'admin'
    })

    let submitForm = () => {
      let { query } = router.currentRoute.value
      let { validate } = unref(loginRef)
      let next = () => {
        let token = ruleForm.userName
        localSet('token', token)
        store.commit('auth/LOGIN', token)
        let jumpUrl = query.redirect ? decodeURIComponent(query.redirect) : '/'
        location.href = jumpUrl
      }
      validate(valid => valid && next())
    }

    return {
      ruleForm,
      submitForm,
      loginRef
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/login_background.png');
  background-size: cover;
  background: #1890ff;
  .box {
    width: 420px;
    box-sizing: border-box;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgb(7 17 27 / 6%);
    background: url('../../assets/images/login_form.png');
    .el-button {
      width: 100%;
    }
  }
  .el-row {
    flex-grow: 1;
  }
  .hello {
    font-size: 32px;
    color: #fff;
  }
  .title {
    margin-bottom: 30px;
    font-size: 20px;
    color: #fff;
  }
}
</style>
