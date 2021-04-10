<template>
  <div id="layout">
    <AsiderComponent />
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
              <el-dropdown @command="command">
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
                    <el-dropdown-item
                      v-for="item in dropdownList"
                      :key="item.action"
                      :command="item.action"
                      :disabled="item.disabled"
                      >{{ item.title }}</el-dropdown-item
                    >
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
import { ref, reactive, onMounted, readonly, computed } from 'vue'
import { useRouter } from 'vue-router'
import tabComponent from '@/components/tab'
import { useStore } from 'vuex'
import { DROPDOWNLIST } from '@/utils/constant'
import { getAsiderCollapseStatus, localSet, localRemove } from '@/utils'
import AsiderComponent from './asider'

export default {
  name: 'layout',
  components: {
    tabComponent,
    AsiderComponent
  },
  setup() {
    let store = useStore()
    let isCollapse = computed(() => store.state.navigation.isCollapse)
    let toggle = () => {
      localSet('collapse', JSON.stringify({ collapse: !isCollapse.value }))
      store.commit('navigation/UPDATE_COLLAPSE_STATUS')
    }

    let router = useRouter()

    let drawer = ref(false)
    let direction = ref('rtl')
    let openDrawer = () => {
      drawer.value = !drawer.value
    }
    let handleClose = done => {
      done()
    }

    let command = command => {
      switch (command) {
        case 'logout':
          localRemove('token')
          localStorage.setItem('LOGOUT', Date.now())
          router.replace({ path: '/login' })
          break
      }
    }

    let dropdownList = readonly(reactive(DROPDOWNLIST))
    onMounted(() => {
      isCollapse.value = getAsiderCollapseStatus()
      store.commit('tag/COMMIT_TAG', router.currentRoute.value)
    })

    return {
      isCollapse,
      toggle,
      drawer,
      direction,
      handleClose,
      openDrawer,
      command,
      dropdownList
    }
  }
}
</script>
<style lang="less">
#layout {
  display: flex;
  width: 100%;
  color: @black;
  .sidebar-wrapper {
    transition: all ease 0.2s;
    > div {
      overflow: hidden;
      display: flex;
      flex-direction: inherit;
      width: 300px;
      overflow: hidden;
    }
  }
  .top-menu {
    height: 100vh;
    background: linear-gradient(90deg, #282c34, #000);
    list-style: none;
    margin: 0;
    padding: 0;
    flex-basis: @fix-bar-width;
    min-width: @fix-bar-width;
    position: fixed;
    left: 0;
    top: 0;
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
    padding-left: @fix-bar-width;
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
    width: 100%;
    background: @bgColor;
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
      overflow: hidden;
      position: relative;
      height: calc(100vh - 107px);
      margin-top: 15px;
    }
    .content-header {
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
    }
  }
  .page-sidebar-expanded {
    width: @sider-bar-width;
  }
  .page-sidebar-collapsed {
    width: @fix-bar-width;
    overflow: hidden;
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
