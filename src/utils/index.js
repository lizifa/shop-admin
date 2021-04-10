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

export function localGet(key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji(str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g
  return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer =
  'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer =
  'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'
