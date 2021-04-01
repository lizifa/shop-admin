<template>
  <div class="my-tab">
    <el-tag v-for="item in visitedRoutes" :key="item.fullPath" :closable="true">
      {{ item.meta.name }}
    </el-tag>

    <!-- <a-tabs
        @tab-click="handleTabClick"
        @edit="handleTabRemove"
        v-model:activeKey="tabActive"
        hide-add
        type="editable-card"
      >
        <a-tab-pane
          v-for="item in visitedRoutes"
          :key="item.fullPath"
          :closable="!isAffix(item)"
          :tab="item.meta.title"
        ></a-tab-pane>
      </a-tabs> -->
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'VabTabs',
  data() {
    return {
      affixTabs: [],
      tabActive: null,
      created: false
    }
  },
  // computed: {
  //   ...mapGetters({
  //     visitedRoutes: 'tagsBar/visitedRoutes',
  //     routes: 'routes/routes'
  //   })
  // },
  // watch: {
  //   $route: {
  //     handler(route) {
  //       this.addTabs(route)
  //     },
  //     immediate: true
  //   }
  // },
  // created() {
  //   console.log(this, 'kkkkkkkkkkkkkk')
  //   // this.initAffixTabs(this.routes)
  //   // this.addTabs(this.$route)
  // },
  // methods: {
  //   ...mapActions({
  //     addVisitedRoute: 'tagsBar/addVisitedRoute',
  //     delVisitedRoute: 'tagsBar/delVisitedRoute',
  //     delOthersVisitedRoutes: 'tagsBar/delOthersVisitedRoutes',
  //     delLeftVisitedRoutes: 'tagsBar/delLeftVisitedRoutes',
  //     delRightVisitedRoutes: 'tagsBar/delRightVisitedRoutes',
  //     delAllVisitedRoutes: 'tagsBar/delAllVisitedRoutes'
  //   }),
  //   initAffixTabs(routes) {
  //     routes.forEach(route => {
  //       if (route.meta && route.meta.affix) this.addTabs(route)
  //       if (route.children) this.initAffixTabs(route.children)
  //     })
  //   },
  //   async addTabs(tag) {
  //     if (tag.name && tag.meta && tag.meta.tagHidden !== true) {
  //       let matched = [tag.name]
  //       if (tag.matched) matched = tag.matched.map(item => item.name)
  //       await this.addVisitedRoute({
  //         path: tag.path,
  //         fullPath: tag.fullPath,
  //         query: tag.query,
  //         params: tag.params,
  //         name: tag.name,
  //         matched: matched,
  //         meta: { ...tag.meta }
  //       })
  //       this.tabActive = tag.fullPath
  //     }
  //   },
  //   isActive(route) {
  //     return route.path === this.$route.path
  //   },
  //   isAffix(tag) {
  //     return tag.meta && tag.meta.affix
  //   },
  //   handleTabClick(tab) {
  //     const route = this.visitedRoutes.filter(item => item.path === tab)[0]
  //     if (this.$route.fullPath !== route.fullPath) this.$router.push(route)
  //   },
  //   async handleTabRemove(fullPath) {
  //     const view = this.visitedRoutes.find(item => {
  //       return fullPath === item.fullPath
  //     })
  //     await this.delVisitedRoute(view)
  //     if (this.isActive(view)) this.toLastTag()
  //   },
  //   handleClick({ key }) {
  //     switch (key) {
  //       case 'closeOthersTabs':
  //         this.closeOthersTabs()
  //         break
  //       case 'closeLeftTabs':
  //         this.closeLeftTabs()
  //         break
  //       case 'closeRightTabs':
  //         this.closeRightTabs()
  //         break
  //       case 'closeAllTabs':
  //         this.closeAllTabs()
  //         break
  //     }
  //   },
  //   async closeSelectedTag(view) {
  //     await this.delVisitedRoute(view)
  //     if (this.isActive(view)) {
  //       this.toLastTag()
  //     }
  //   },
  //   async closeOthersTabs() {
  //     await this.delOthersVisitedRoutes(this.toThisTag())
  //   },
  //   async closeLeftTabs() {
  //     await this.delLeftVisitedRoutes(this.toThisTag())
  //   },
  //   async closeRightTabs() {
  //     await this.delRightVisitedRoutes(this.toThisTag())
  //   },
  //   async closeAllTabs() {
  //     await this.delAllVisitedRoutes()
  //     if (this.affixTabs.some(tag => tag.path === this.toThisTag().path)) return
  //     this.toLastTag()
  //   },
  //   toLastTag() {
  //     const latestView = this.visitedRoutes.slice(-1)[0]
  //     if (latestView) this.$router.push(latestView)
  //     else this.$router.push('/')
  //   },
  //   toThisTag() {
  //     const view = this.visitedRoutes.find(
  //       item => item.fullPath === this.$route.fullPath
  //     )
  //     if (this.$route.path !== view.path) this.$router.push(view)
  //     return view
  //   }
  // },
  setup() {
    let store = useStore()
    let route = useRoute()
    watch(
      () => route.path,
      () => {
        // console.log(route)
      }
    )
    return {
      visitedRoutes: computed(() => store.getters.visitedRoutes)
    }
  }
}
</script>
<style lang="less">
.my-tab {
  .el-tag {
    padding: 0 30px 0 30px;
    mask: url('../../assets/images/tab.png');
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    border: none;
  }
}
</style>
