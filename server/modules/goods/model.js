let { db } = require('../../middleware/MiddlewareMysql')
let { createSql } = require('./fileds')

let PostModel = {
  insert(insertData) {
    return new Promise((resolve, reject) => {
      let sql = createSql(insertData, { type: 'insert' })
      db.query(sql, (err, results) => {
        if (err) {
          reject({ code: 400, data: err })
        } else {
          resolve({ code: 201 })
        }
      })
    })
  },
  update(id, insertData) {
    return new Promise((resolve, reject) => {
      let sql = createSql(insertData, { type: 'update', id })
      db.query(sql, (err, results) => {
        if (err) {
          reject({ code: 400, data: '参数错误~' })
        } else {
          resolve({ code: 201, data: results })
        }
      })
    })
  },
  delete(id) {
    return new Promise((resolve, reject) => {
      let sql = createSql({}, { type: 'delete', id })
      db.query(sql, (err, results) => {
        if (err) {
          reject({ code: 400, data: err })
        } else {
          resolve({ code: 200 })
        }
      })
    })
  },
  queryById(id) {
    return new Promise((resolve, reject) => {
      let sql = createSql({}, { type: 'select', id })
      db.query(sql, (err, results) => {
        if (err) {
          reject({ code: 400, data: err })
        } else {
          resolve({ code: 200, data: results })
        }
      })
    })
  },
  queryAll(params) {
    return new Promise((resolve, reject) => {
      let { page, size } = params
      let sql = `select * from article ORDER BY id DESC limit ${(page - 1) * size}, ${size}`
      db.query(sql, (err, results) => {
        if (err) {
          reject({ code: 400, data: err })
        } else {
          resolve({ code: 200, data: JSON.parse(JSON.stringify(results)) })
        }
      })
    })
  }
}

module.exports = PostModel
