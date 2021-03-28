<template>
  <div id="layout">
    <div
      :class="[
        `sidebar-wrapper ${
          isCollapse ? 'page-sidebar-expanded' : 'page-sidebar-collapsed'
        }`
      ]"
    >
      <ul class="menu">
        <li
          v-for="(item, index) in menus"
          :key="index"
          @click="routeJump(menus, item, index)"
          :class="{ active: item.meta.active }"
        >
          <i class="el-icon-chat-line-round" data="el-icon"></i>
          {{ item.meta.title }}
        </li>
      </ul>
      <ul class="next-menu">
        <li
          v-for="(item, index) in routes"
          :key="index"
          :class="{ active: item.meta.active }"
          @click="routeJump(routes, item, index)"
        >
          <i class="el-icon-chat-line-round" data="el-icon"></i>
          {{ item.meta.name }}
        </li>
      </ul>
    </div>
    <div class="content-wrapper">
      <div class="content-header">
        <div class="navigation">
          <i
            :class="[
              `${isCollapse ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'}`
            ]"
            data="el-icon-d-arrow"
            @click="toggle"
          ></i>
          <ul class="inner-navigation">
            <li>
              <i class="el-icon-bell"></i>
            </li>
            <li>
              <i class="el-icon-refresh"></i>
            </li>
            <li>
              <i class="el-icon-search"></i>
            </li>
            <li>
              <div class="user">
                <div class="avatar">
                  <img src="../assets/images/15918_100.gif" alt="" />
                </div>
                小书包
                <i class="el-icon-arrow-down"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="breadcrumb" v-if="false">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="content-main"><router-view /></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

function getChildRouter() {
  let { currentRoute } = useRouter()
  return currentRoute.value.matched[0].children.slice()
}

function getCurRouter() {
  let router = useRouter()
  let allRoutes = router.getRoutes().filter(route => route.meta.topMenu)
  allRoutes = allRoutes.map(route => {
    if (route.meta.name === router.currentRoute.value.path.split('/')[1]) {
      route.meta.active = true
      route.children.map(child => {
        if (child.path === router.currentRoute.value.path.split('/')[2]) {
          child.meta.active = true
        } else {
          child.meta.active = false
        }
        return child
      })
    } else {
      route.meta.active = false
    }
    return route
  })
  return allRoutes
}

export default {
  name: 'App',
  props: {
    scroll: {
      type: Function,
      defaule: () => {}
    }
  },
  setup() {
    let isCollapse = ref(true)
    let toggle = () => {
      isCollapse.value = !isCollapse.value
    }

    let router = useRouter()
    let routes = reactive(getChildRouter())
    let menus = reactive(getCurRouter())
    let routeJump = (arr, item) => {
      arr.map(v => (v.meta.active = false))
      item.meta.active = true
      router.push({ path: item.path })
    }

    return {
      isCollapse,
      toggle,
      menus,
      routeJump,
      routes
    }
  }
}
</script>
<style lang="less" scoped>
#layout {
  display: flex;
  width: 100%;
  .sidebar-wrapper {
    transition: all ease 0.2s;
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
  }
  .menu {
    height: 100vh;
    background: linear-gradient(90deg, #282c34, #000);
    list-style: none;
    margin: 0;
    padding: 0;
    flex-basis: 65px;
    min-width: 65px;
    li {
      width: 100%;
      height: 65px;
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
  .next-menu {
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
      height: 50px;
      cursor: pointer;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      transition: all ease 0.4s;
      &.active {
        background: rgba(24, 144, 255, 0.1) !important;
        cursor: pointer;
      }
      [data^='el-icon'] {
        margin-right: 5px;
      }
    }
  }

  .content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // color: @black;
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
      height: 60px;
      justify-content: space-between;
      [data^='el-icon-d-arrow'] {
        cursor: pointer;
        margin-right: 10px;
        margin-left: 10px;
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
    width: 300px;
  }
  .page-sidebar-collapsed {
    width: 65px;
  }
}
</style>
