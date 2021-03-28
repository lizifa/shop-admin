export function getChildRouter(router) {
  return router.currentRoute.value.matched[0].children.slice()
}

export function getCurRouter(router) {
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
