export const DROPDOWNLIST = [
  {
    action: 'action1',
    title: '功能1',
    disabled: false
  },
  {
    action: 'action2',
    title: '功能2',
    disabled: false
  },
  {
    action: 'action3',
    title: '功能3',
    disabled: true
  },
  {
    action: 'logout',
    title: '退出',
    disabled: false
  },
  {
    action: 'action4',
    title: '修改密码',
    disabled: true
  }
]

export const OPTIONS1 = {
  title: {
    text: '未来一周气温变化',
    subtext: '纯属虚构'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['最高气温', '最低气温']
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: '平均值' }]
      }
    },
    {
      name: '最低气温',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: '最大值'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
}

export const TABLEDATE = [
  {
    startTime: '2016-05-02',
    endTime: '2016-05-02',
    target: '学习flutter',
    progress: 50
  },
  {
    startTime: '2016-05-04',
    endTime: '2016-05-04',
    target: '网站重构',
    progress: 50
  },
  {
    startTime: '2016-05-01',
    endTime: '2016-05-01',
    target: '增肥',
    progress: 50
  },
  {
    startTime: '2016-05-03',
    endTime: '2016-05-03',
    target: 'Golang',
    progress: 50
  },
  {
    startTime: '2016-05-03',
    endTime: '2016-05-03',
    target: 'Typesccript',
    progress: 50
  },
  {
    startTime: '2016-05-03',
    endTime: '2016-05-03',
    target: 'JS深度指南',
    progress: 50
  },
  {
    startTime: '2016-05-03',
    endTime: '2016-05-03',
    target: '深入node',
    progress: 50
  }
]

export const TABLE_DATA = [
  {
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    hasChildren: true
  },
  {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
]
