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
          @click="chengeMenu(item, index)"
          :class="{ active: item.active }"
        >
          <i class="el-icon-chat-line-round" data="el-icon"></i>
          {{ item.text }}
        </li>
      </ul>
      <ul class="next-menu">
        <li
          v-for="(item, index) in menus[activeInex].children"
          :key="index"
          :class="{ active: item.active }"
          @click="chengeRoute(item, index)"
        >
          <i class="el-icon-chat-line-round" data="el-icon"></i>
          {{ menus[activeInex].text }}-{{ item.text }}
        </li>
      </ul>
    </div>
    <div class="content-wrapper">
      <div class="cotent-header">
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
                <div class="avatar"></div>
                小书包
                <i class="el-icon-arrow-down"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="content-main"></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { list } from '@/utils'
export default {
  name: 'App',
  setup() {
    let isCollapse = ref(true)
    let toggle = function() {
      isCollapse.value = !isCollapse.value
    }

    let menus = reactive(list)

    let activeInex = ref(0)
    let chengeMenu = function(item, index) {
      menus[activeInex.value].active = false
      item.active = true
      activeInex.value = index
    }
    let chengeRoute = function(item) {
      menus[activeInex.value].children.map(cur => (cur.active = false))
      item.active = true
    }
    return {
      isCollapse,
      toggle,
      menus,
      chengeMenu,
      activeInex,
      chengeRoute
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
    .breadcrumb {
      display: flex;
      align-items: center;
      height: 60px;
      margin-left: 15px;
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
        padding: 0 20px;
        cursor: pointer;
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50px;
        overflow: hidden;
        background: red;
        margin-right: 5px;
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
    }
    .cotent-header {
      overflow: hidden;
      border-bottom: 1px solid #eaeefb;
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
