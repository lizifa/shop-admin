<template>
  <div id="page3">
    <div style="margin-bottom: 20px">
      <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
      <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
      <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
      <el-button size="mini" type="primary" icon="el-icon-search"
        >搜索</el-button
      >
      <el-button size="mini" type="primary"
        >上传<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
      style="margin: 0 auto;text-align:right;padding: 40px 0 20px"
    >
    </el-pagination>
  </div>
</template>

<script>
const tableData = [
  {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-08',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }
]
export default {
  setup() {
    return {
      tableData
    }
  }
}
</script>
<style lang="less" scoped>
#page3 {
  position: relative;
  margin: 15px;
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 15px;
  .el-table {
    width: 100%;
  }
}
</style>
