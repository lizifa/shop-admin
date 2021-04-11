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

export function hasEmoji(str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g
  return str.match(reg) && str.match(reg).length
}

/**
 * 获取对象的指定key值
 * eg:
 *  var obj = {
 *      a:1,
 *      b:2,
 *      c:{
 *          d:3,
 *          e:[
 *              1,2,3
 *          ],
 *          f:[
 *              {
 *                  1:2
 *              }
 *          ]
 *      }
 *  };
 *
 *  console.log(
 *      getVal(obj, 'a'),
 *      getVal(obj, 'c.d'),
 *      getVal(obj, 'c.e.1'),
 *      getVal(obj, 'c.f.0.1'),
 *      getVal(obj, 'c.f.f', 'haha'),
 *      obj
 *  )
 * @param {Object|Array} target
 * @param {string} query
 * @param {any} defaultValue
 */
export function getVal(obj, query, defaultValue) {
  if (obj === null || !(typeof obj === 'object')) {
    let realType = obj === null ? 'null' : typeof obj
    console.error(
      `[getVal]: parameter obj's type should be 'object', but it is ${realType}`
    )

    return defaultValue
  }
  if (typeof query !== 'string') {
    throw new Error(
      `[getVal]: parameter query's should be string, but it is ${typeof query}`
    )
  }
  const keys = query.split('.')
  let valObj = obj
  for (let i = 0, len = keys.length; valObj && i < len; i++) {
    valObj = valObj[keys[i]]
  }
  if (!valObj) {
    return defaultValue
  } else {
    return valObj
  }
}

/**
 * 生成随机数
 */
export function randomUrl() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, c => {
      // tslint:disable-next-line:no-magic-numbers
      let r = (Math.random() * 16) | 0
      let v = c === 'x' ? r : (r & 0x3) | 0x8

      return v.toString(16)
    })
    .toUpperCase()
}

/**
 * 生成唯一的字符串
 * @return str{string}
 */
export function genUniqStr() {
  return (
    Math.random()
      .toString(36)
      .substring(7) + Date.now().toString(16)
  )
}

export function getCollapseStatus() {
  let cache = localGet('collapse')
  let isCollapse = true
  if (cache) {
    cache = typeof cache === 'string' ? JSON.parse(cache) : cache
    isCollapse = cache.collapse
  }
  return isCollapse
}
