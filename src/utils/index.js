import { routes } from '../router/routes'
/**
 * 获取当前路由的子路由
 * @param {*} router对象
 * @returns
 */
export function getChildRouter(router) {
  return router.currentRoute.value.matched[0].children.slice()
}

export function getCurRouter() {
  return routes.filter(v => v.meta && v.meta.topMenu)
}

export const hasClass = function(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export const addClass = function(obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls
}

export const removeClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}

export const toggleClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}
