<template>
  <el-card class="index-container">
    <template #header>
      <div class="header">
        <el-button
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="handleAdd"
          >增加</el-button
        >
        <el-popconfirm title="确定删除吗？" @confirm="handleDelete">
          <template #reference>
            <el-button type="danger" size="small" icon="el-icon-delete"
              >批量删除</el-button
            >
          </template>
        </el-popconfirm>
      </div>
    </template>
    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="configName" label="商品名称"> </el-table-column>
      <el-table-column label="跳转链接">
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{
            scope.row.redirectUrl
          }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="configRank" label="排序值" width="120">
      </el-table-column>
      <el-table-column prop="goodsId" label="商品编号" width="200">
      </el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <a
            style="cursor: pointer; margin-right: 10px"
            @click="handleEdit(scope.row.configId)"
            >修改</a
          >
          <el-popconfirm
            title="确定删除吗？"
            @confirm="handleDeleteOne(scope.row.configId)"
          >
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </el-card>
  <!-- <DialogAddGood
    ref="addGood"
    :reload="getIndexConfig"
    :type="type"
    :configType="configType"
  /> -->
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
// import DialogAddGood from '@/components/DialogAddGood.vue'
import { useRoute, useRouter } from 'vue-router'
// 首页配置类型参数
const configTypeMap = {
  hot: 3,
  new: 4,
  recommend: 5
}
const response = {
  resultCode: 200,
  message: 'SUCCESS',
  data: {
    totalCount: 26,
    pageSize: 10,
    totalPage: 3,
    currPage: 1,
    list: [
      {
        configId: 107,
        configName: '111',
        configType: 5,
        goodsId: 111,
        redirectUrl: '111',
        configRank: 111,
        isDeleted: 0,
        createTime: '2021-04-08 14:16:46',
        createUser: 0,
        updateTime: '2021-04-08 14:16:46',
        updateUser: 0
      },
      {
        configId: 70,
        configName: 'Apple Ipone 13',
        configType: 5,
        goodsId: 15264,
        redirectUrl: '#',
        configRank: 103,
        isDeleted: 0,
        createTime: '2021-04-01 11:02:18',
        createUser: 0,
        updateTime: '2021-04-07 17:02:40',
        updateUser: 0
      },
      {
        configId: 10,
        configName: '纪梵希高定香榭天鹅绒唇膏',
        configType: 5,
        goodsId: 10233,
        redirectUrl: '##',
        configRank: 102,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-06 16:48:45',
        updateUser: 0
      },
      {
        configId: 12,
        configName: '索尼 WH-1000XM3',
        configType: 5,
        goodsId: 10195,
        redirectUrl: '##',
        configRank: 102,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:02:40',
        updateUser: 0
      },
      {
        configId: 24,
        configName: '华为 Mate 30 Pro',
        configType: 5,
        goodsId: 10894,
        redirectUrl: '#',
        configRank: 102,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:02:40',
        updateUser: 0
      },
      {
        configId: 13,
        configName: 'Apple AirPods',
        configType: 5,
        goodsId: 0,
        redirectUrl: '##',
        configRank: 101,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:02:40',
        updateUser: 0
      },
      {
        configId: 11,
        configName: 'MAC 磨砂系列',
        configType: 5,
        goodsId: 10237,
        redirectUrl: '##',
        configRank: 100,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:54:50',
        updateUser: 0
      },
      {
        configId: 14,
        configName: '华为Mate40 Pro',
        configType: 5,
        goodsId: 10909,
        redirectUrl: '##',
        configRank: 100,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:54:50',
        updateUser: 0
      },
      {
        configId: 15,
        configName: '2019 MacBookAir 13',
        configType: 5,
        goodsId: 10254,
        redirectUrl: '##',
        configRank: 100,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:02:40',
        updateUser: 0
      },
      {
        configId: 18,
        configName: '靠垫',
        configType: 5,
        goodsId: 10147,
        redirectUrl: '##',
        configRank: 100,
        isDeleted: 0,
        createTime: '2021-03-08 18:55:49',
        createUser: 0,
        updateTime: '2021-04-07 17:54:50',
        updateUser: 0
      }
    ]
  }
}
export default {
  name: 'Hot',
  //   components: {
  //     DialogAddGood
  //   },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const multipleTable = ref(null)
    const addGood = ref(null)
    const state = reactive({
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      type: 'add', // 操作类型
      configType: 3 // 3-(首页)热销商品 4-(首页)新品上线 5-(首页)为你推荐
    })
    // 监听路由变化
    router.beforeEach(to => {
      if (['hot', 'new', 'recommend'].includes(to.name)) {
        state.configType = configTypeMap[to.name]
        state.currentPage = 1
        getIndexConfig()
      }
    })
    // 初始化
    onMounted(() => {
      state.configType = configTypeMap[route.name]
      getIndexConfig()
    })
    // 首页热销商品列表
    const getIndexConfig = () => {
      state.loading = true
      const res = response
      state.tableData = res.list
      state.total = res.totalCount
      state.currentPage = res.currPage
      state.loading = false
    }
    // 添加商品
    const handleAdd = () => {
      state.type = 'add'
      addGood.value.open()
    }
    // 修改商品
    const handleEdit = id => {
      state.type = 'edit'
      addGood.value.open(id)
    }
    // 选择项
    const handleSelectionChange = val => {
      state.multipleSelection = val
    }
    // 删除
    const handleDelete = () => {
      if (!state.multipleSelection.length) {
        ElMessage.error('请选择项')
        return
      }
    }
    // 单个删除
    const handleDeleteOne = id => {
      console.log(id)
    }
    const changePage = val => {
      state.currentPage = val
      getIndexConfig()
    }
    return {
      ...toRefs(state),
      multipleTable,
      handleSelectionChange,
      addGood,
      handleAdd,
      handleEdit,
      handleDelete,
      handleDeleteOne,
      getIndexConfig,
      changePage
    }
  }
}
</script>

<style scoped>
.index-container {
  min-height: 100%;
}
.el-card.is-always-shadow {
  min-height: 100% !important;
}
</style>
