<template>
  <div id="dashboard">
    <el-row :gutter="15" class="section">
      <el-col :span="4" v-for="(item, index) in tabs" :key="index"
        ><div class="item">
          <div><i :class="item.icon" :style="{ color: item.color }"></i></div>
          <div>
            <div class="number">{{ item.count }}</div>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="section section-canvas" :gutter="15">
      <el-col :span="12"
        ><div class="echart-box"><div id="main"></div></div
      ></el-col>
      <el-col :span="12">
        <div class="table-box">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="target" label="目标" width="180" />
            <el-table-column prop="progress" label="进度">
              <template #default="scope"
                ><el-progress :percentage="scope.row.progress"></el-progress
              ></template>
            </el-table-column>
            <el-table-column prop="startTime" label="开始时间" width="180" />
            <el-table-column prop="endTime" label="结束时间" width="180" />
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { onMounted, nextTick, reactive } from 'vue'
import * as echarts from 'echarts'
import { OPTIONS1, TABLEDATE } from '@/utils/constant'
import { TAB_CONFIG } from '@/utils/constant'
export default {
  name: 'VabTabs',
  setup() {
    let tabs = reactive(TAB_CONFIG)
    let useEchart = () => {
      let chartDom = document.getElementById('main')
      echarts.init(chartDom).setOption(OPTIONS1)
    }
    let tableData = TABLEDATE
    onMounted(() => {
      nextTick(() => useEchart())
    })
    return {
      tableData,
      tabs
    }
  }
}
</script>
<style lang="less" scoped>
#dashboard {
  box-sizing: border-box;
  margin: 15px;
  border-radius: 4px;
  .item {
    height: 125px;
    background: #fff;
    border-radius: 4px;
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    i {
      font-size: 50px;
    }
    span {
      color: #999;
      font-size: 12px;
    }
    .number {
      color: #515a6e;
      font-size: 30px;
    }
  }
  .section-canvas {
    margin-top: 15px;
    overflow: hidden;
    .echart-box {
      width: 100%;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
    }
    .table-box {
      width: 100%;
      background: #fff;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
    #main {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
