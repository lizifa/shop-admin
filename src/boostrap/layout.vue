<template>
  <div id="layout">
    <div
      :class="[
        `sidebar-wrapper ${
          isCollapse ? 'page-sidebar-expanded' : 'page-sidebar-collapsed'
        }`
      ]"
    >
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
            <div class="next-title" @click="toggleMenu(item, $event)">
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
    <div class="content-wrapper">
      <div class="content-header">
        <div class="navigation">
          <i
            :class="[`${isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'}`]"
            data="el-icon-d-arrow"
            @click="toggle"
          ></i>
          <ul class="inner-navigation">
            <li>
              <el-badge is-dot type="danger"
                ><i class="el-icon-bell" @click="openDrawer"></i
              ></el-badge>
            </li>
            <li>
              <i class="el-icon-refresh"></i>
            </li>
            <li>
              <i class="el-icon-search"></i>
            </li>
            <li>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <div class="user">
                    <div class="avatar">
                      <img src="../assets/images/15918_100.gif" alt="" />
                    </div>
                    小书包
                  </div>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </li>
          </ul>
        </div>
        <tabComponent />
      </div>
      <div class="content-main"><router-view /></div>
    </div>
    <el-drawer
      title="我是标题"
      v-model="drawer"
      :direction="direction"
      :before-close="handleClose"
      destroy-on-close
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getChildRouter, getCurRouter } from '../utils'
import tabComponent from '../components/tab'
import { useCollapse } from '../utils/hooks'

export default {
  name: 'layout',
  components: {
    tabComponent
  },
  setup() {
    let [isCollapse, setCollapse] = useCollapse(true)
    let toggle = () => {
      setCollapse(!isCollapse.value)
    }

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
    let toggleMenu = item => {
      // let target = e.target
      // let next = target.parentNode.children[1]
      item.meta.active = !item.meta.active
      // next.style.maxHeight = `${next.offsetHeight}px`
    }
    let drawer = ref(false)
    let direction = ref('rtl')
    let openDrawer = () => {
      drawer.value = !drawer.value
    }
    let handleClose = done => {
      done()
    }

    let route = useRoute()
    watch(
      () => route.path,
      () => {
        let pathArr = router.currentRoute.value.path.split('/')
        let item = menus.list.find(v => v.path === '/' + pathArr[1])
        item.children && (routes.list = item.children)
      }
    )

    onMounted(() => {
      let cache = localStorage.getItem('collapse')
      if (cache) {
        cache = JSON.parse(localStorage.getItem('collapse'))
        isCollapse.value = cache.collapse
      }
    })

    return {
      isCollapse,
      toggle,
      menus,
      routeJump,
      routes,
      drawer,
      direction,
      handleClose,
      openDrawer,
      route,
      toggleMenu
    }
  }
}
</script>
<style lang="less" scoped>
#layout {
  display: flex;
  width: 100%;
  color: @black;
  .sidebar-wrapper {
    transition: all ease 0.2s;
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
  }
  .top-menu {
    height: 100vh;
    background: linear-gradient(90deg, #282c34, #000);
    list-style: none;
    margin: 0;
    padding: 0;
    flex-basis: @fix-bar-width;
    min-width: @fix-bar-width;
    li {
      width: 100%;
      height: @fix-bar-width;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      flex-direction: column;
      transition: all ease 0.4s;
      &.active {
        background: #1890ff;
        cursor: pointer;
      }
      [data^='el-icon'] {
        margin-bottom: 5px;
        font-size: 18px;
      }
    }
  }
  .second-menu {
    height: 100vh;
    box-sizing: border-box;
    flex-basis: 300px;
    overflow: hidden;
    border-right: 1px solid #eaeefb;
    flex-grow: 1;
    margin: 0;
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
      font-size: 14px;
      transition: all ease 0.4s;
      display: flex;
      flex-direction: column;
      > .next-title {
        display: block;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px;
        position: relative;
        .el-icon-arrow-down {
          position: absolute;
          right: 10px;
          top: 50%;
          height: 26px;
          width: 26px;
          margin-top: -13px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: all ease 0.4s;
        }
        .rotate {
          transform: rotate(180deg);
        }
      }
      &.active {
        background: rgba(24, 144, 255, 0.1) !important;
        cursor: pointer;
        .el-icon-arrow-down {
          transform: rotate(180deg);
        }
      }
      // &:hover {
      //   background: rgba(24, 144, 255, 0.1) !important;
      //   cursor: pointer;
      // }
      [data^='el-icon'] {
        margin-right: 5px;
      }
      .el-badge {
        display: block;
        flex-grow: 1;
      }
    }
  }
  .third-menu {
    box-sizing: border-box;
    overflow: hidden;
    flex-grow: 1;
    margin: 0;
    list-style: none;
    padding: 0;
    background: #fff;
    transition: all ease 0.1s;
    transform-origin: 0% 0%;
    max-height: unset;
    &.active {
      max-height: 0;
    }
    li {
      cursor: pointer;
      font-size: 14px;
      transition: all ease 0.4s;
      display: flex;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 10px;
      flex-direction: unset;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
        color 0.1s, font-size 0s;
      &.active {
        background: rgba(24, 144, 255, 0.1) !important;
        cursor: pointer;
      }
      &:hover {
        background: rgba(24, 144, 255, 0.1) !important;
        cursor: pointer;
      }
      [data^='el-icon'] {
        margin-right: 5px;
      }
      .el-badge {
        display: block;
        flex-grow: 1;
      }
    }
  }
  .content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .breadcrumb {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #f0f2f5;
      .el-breadcrumb {
        flex-grow: 1;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      height: @header-height;
      justify-content: space-between;
      [data^='el-icon-d-arrow'] {
        cursor: pointer;
        margin-right: 10px;
        margin-left: 10px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    .inner-navigation {
      flex-grow: 1;
      text-align: right;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50px;
        overflow: hidden;
        margin-right: 5px;
        img {
          width: 100%;
        }
      }
      .user {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
    }
    .content-main {
      flex-grow: 1;
      background: #f0f2f5;
      overflow: hidden;
      position: relative;
    }
    .content-header {
      overflow: hidden;
      box-sizing: border-box;
    }
  }
  .page-sidebar-expanded {
    width: @sider-bar-width;
  }
  .page-sidebar-collapsed {
    width: @fix-bar-width;
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
