<template>
  <div class="my-tab">
    <el-tag
      v-for="(item, index) in visitedRoutes"
      :key="item.fullPath"
      :closable="!!index"
      :class="[
        `${
          item.path === route.path || item.redirect === route.path
            ? 'el-tag-active'
            : ''
        }`
      ]"
      @click="onTabClick(item)"
      @close="onTabClose(index)"
    >
      <i class="el-icon-chat-line-round" data="el-icon"></i>
      {{ item.meta && (item.meta.title || item.meta.name) }}
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
    let visitedRoutes = computed(() => store.state.tag.visitedRoutes)

    let onTabClick = data => {
      router.push({ path: data.path, query: data.query })
    }
    let onTabClose = data => {
      store.commit('tag/DELETE_TAG', data)
      let item = visitedRoutes.value[visitedRoutes.value.length - 1]
      router.push({ path: item.path })
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
    mask-size: 100% 110%;
    border: none;
    cursor: pointer;
    background: transparent;
    transition: @transition;
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
