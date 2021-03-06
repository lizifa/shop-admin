<template>
  <ScrollView class="goods-update">
    <el-form
      :model="goodForm"
      :rules="rules"
      ref="goodRef"
      label-width="auto"
      class="goodForm"
    >
      <el-form-item required label="商品分类">
        <el-cascader
          :placeholder="defaultCate"
          style="width: 100%"
          :props="category"
          @change="handleChangeCate"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="商品名称" prop="goodsName">
        <el-input
          style="width: 100%"
          v-model="goodForm.goodsName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品简介" prop="goodsIntro">
        <el-input
          style="width: 100%"
          type="textarea"
          v-model="goodForm.goodsIntro"
          placeholder="请输入商品简介(100字)"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="originalPrice">
        <el-input
          type="number"
          min="0"
          style="width: 100%"
          v-model="goodForm.originalPrice"
          placeholder="请输入商品价格"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品售卖价" prop="sellingPrice">
        <el-input
          type="number"
          min="0"
          style="width: 100%"
          v-model="goodForm.sellingPrice"
          placeholder="请输入商品售价"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品库存" prop="stockNum">
        <el-input
          type="number"
          min="0"
          style="width: 100%"
          v-model="goodForm.stockNum"
          placeholder="请输入商品库存"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品标签" prop="tag">
        <el-input
          style="width: 100%"
          v-model="goodForm.tag"
          placeholder="请输入商品小标签"
        ></el-input>
      </el-form-item>
      <el-form-item label="上架状态" prop="goodsSellStatus">
        <el-radio-group v-model="goodForm.goodsSellStatus">
          <el-radio label="0">上架</el-radio>
          <el-radio label="1">下架</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item required label="商品主图" prop="goodsCoverImg">
        <el-upload
          class="avatar-uploader"
          :action="uploadImgServer"
          accept="jpg,jpeg,png"
          :headers="{
            token: token
          }"
          :show-file-list="false"
          :before-upload="handleBeforeUpload"
          :on-success="handleUrlSuccess"
        >
          <img
            style="width: 100px; height: 100px; border: 1px solid #e9e9e9;"
            v-if="goodForm.goodsCoverImg"
            :src="goodForm.goodsCoverImg"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="详情内容">
        <div ref="editor"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAdd()">{{
          id ? '立即修改' : '立即创建'
        }}</el-button>
      </el-form-item>
    </el-form>
  </ScrollView>
</template>

<script>
import { reactive, ref, toRefs, onMounted, onBeforeUnmount } from 'vue'
import WangEditor from 'wangeditor'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { localGet } from '@/utils'
import ScrollView from '@/components/scroll-view'
export default {
  name: 'addGoods',
  components: {
    ScrollView
  },
  setup() {
    const editor = ref(null)
    const goodRef = ref(null)
    const route = useRoute()
    const { id } = route.query
    const state = reactive({
      uploadImgServer: '',
      token: localGet('token') || '',
      id: id,
      defaultCate: '',
      goodForm: {
        goodsName: '',
        goodsIntro: '',
        originalPrice: '',
        sellingPrice: '',
        stockNum: '',
        goodsSellStatus: '0',
        goodsCoverImg: '',
        tag: ''
      },
      rules: {
        goodsName: [
          { required: 'true', message: '请填写商品名称', trigger: ['change'] }
        ],
        originalPrice: [
          { required: 'true', message: '请填写商品价格', trigger: ['change'] }
        ],
        sellingPrice: [
          { required: 'true', message: '请填写商品售价', trigger: ['change'] }
        ],
        stockNum: [
          { required: 'true', message: '请填写商品库存', trigger: ['change'] }
        ]
      },
      categoryId: '',
      category: {}
    })
    let instance
    onMounted(() => {
      instance = new WangEditor(editor.value)
      instance.config.showLinkImg = false
      instance.config.showLinkImgAlt = false
      instance.config.showLinkImgHref = false
      instance.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
      instance.config.uploadFileName = 'file'
      instance.config.uploadImgHeaders = {
        token: state.token
      }
      // 图片返回格式不同，需要自定义返回格式
      instance.config.uploadImgHooks = {
        // 图片上传并返回了结果，想要自己把图片插入到编辑器中
        // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
        customInsert: function(insertImgFn, result) {
          console.log('result', result)
          // result 即服务端返回的接口
          // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
          if (result.data && result.data.length) {
            result.data.forEach(item => insertImgFn(item))
          }
        }
      }
      instance.config.uploadImgServer = ''
      Object.assign(instance.config, {
        onchange() {
          console.log('change')
        }
      })
      instance.create()
    })
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })
    const submitAdd = () => {}
    const handleBeforeUpload = file => {
      const sufix = file.name.split('.')[1] || ''
      if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
        ElMessage.error('请上传 jpg、jpeg、png 格式的图片')
        return false
      }
    }
    const handleUrlSuccess = val => {
      state.goodForm.goodsCoverImg = val.data || ''
    }
    const handleChangeCate = val => {
      state.categoryId = val[2] || 0
    }
    return {
      ...toRefs(state),
      goodRef,
      submitAdd,
      handleBeforeUpload,
      handleUrlSuccess,
      editor,
      handleChangeCate
    }
  }
}
</script>

<style scoped lang="less">
.goods-update {
  display: flex;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 15px;
  .goodForm {
    width: 99%;
  }
  .avatar-uploader {
    width: 100px;
    height: 100px;
    color: #ddd;
    font-size: 30px;
  }
  .avatar-uploader-icon {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 17px;
  }
}
</style>
