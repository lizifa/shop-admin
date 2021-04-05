<template>
  <div class="my-tab">
    <el-tag
      v-for="(item, index) in visitedRoutes"
      :key="item.fullPath"
      :closable="!!index"
      :class="[`${item.path === route.path ? 'el-tag-active' : ''}`]"
      @click="onTabClick(item)"
      @close="onTabClose(index)"
    >
      <i class="el-icon-chat-line-round" data="el-icon"></i>
      {{ item.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Tag',
  setup() {
    let router = useRouter()
    let store = useStore()
    let route = useRoute()
    let visitedRoutes = computed(() => store.getters.visitedRoutes)

    let onTabClick = data => {
      router.push({ path: data.path })
    }
    let onTabClose = data => {
      console.log(data, 'close')
    }
    return {
      visitedRoutes,
      route,
      onTabClick,
      onTabClose
    }
  }
}
</script>
<style lang="less">
.my-tab {
  .el-tag {
    mask: url('~@/assets/images/tab.png');
    mask-size: 100% 100%;
    border: none;
    cursor: pointer;
    background: transparent;
    transition: all ease 0.4s;
    &:hover {
      background: #dee1e6;
      padding: 0 30px 0 30px;
    }
    &.el-tag-active {
      padding: 0 30px 0 30px;
      background: #e8f4ff;
    }
  }
}
</style>
