<template>
  <div
    :class="[
      `sidebar-wrapper ${
        isCollapse ? 'page-sidebar-expanded' : 'page-sidebar-collapsed'
      }`
    ]"
  >
    <div>
      <ul class="top-menu">
        <li
          v-for="(item, index) in menus.list"
          :key="index"
          @click="routeJump(item)"
          :class="{ active: route.fullPath.includes(item.meta.name) }"
        >
          <i class="el-icon-chat-line-round" data="el-icon"></i>
          {{ item.meta.title }}
        </li>
      </ul>
      <ul class="second-menu">
        <li
          v-for="(item, index) in routes.list"
          :key="index"
          :class="{
            active: route.path === item.path && !item.children
          }"
        >
          <template v-if="!item.children">
            <div class="next-title" @click="routeJump(item)">
              <i class="el-icon-chat-line-round" data="el-icon"></i>
              {{ item.meta.title }}
              <i
                class="el-icon-arrow-down"
                v-if="item.children && item.children.length > 0"
              ></i>
            </div>
          </template>
          <template v-else>
            <div class="next-title">
              <i class="el-icon-chat-line-round" data="el-icon"></i>
              {{ item.meta.title }}
              <i
                :class="[
                  `el-icon-arrow-down ${item.meta.active ? 'rotate' : ''}`
                ]"
                v-if="item.children && item.children.length > 0"
              ></i>
            </div>
            <ol
              :class="[`third-menu ${item.meta.active ? 'active' : ''}`]"
              v-if="item.children && item.children.length > 0"
            >
              <li
                v-for="(item, index) in item.children"
                :key="index"
                @click="routeJump(item)"
                :class="{
                  active: route.path.includes(item.path)
                }"
              >
                <i class="el-icon-chat-line-round" data="el-icon"></i
                >{{ item.meta.title }}
              </li>
            </ol>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getChildRouter, getCurRouter } from '@/utils'
import { useStore } from 'vuex'

export default {
  name: 'asider',
  setup() {
    let store = useStore()
    let isCollapse = computed(() => store.state.navigation.isCollapse)

    let router = useRouter()
    let routes = reactive({
      list: getChildRouter(router)
    })
    let menus = reactive({
      list: getCurRouter(router)
    })
    let routeJump = item => {
      router.push({ path: item.path })
    }
    // let toggleMenu = item => {
    //   item.meta.active = !item.meta.active
    // }

    let route = useRoute()
    watch(
      () => route.path,
      () => {
        let pathArr = router.currentRoute.value.path.split('/')
        let item = menus.list.find(v => v.path === '/' + pathArr[1])
        item && item.children && (routes.list = item.children)
        store.commit('tag/COMMIT_TAG', router.currentRoute.value)
      }
    )

    return {
      isCollapse,
      menus,
      routeJump,
      routes,
      route
      // toggleMenu
    }
  }
}
</script>
