let mysql = require('mysql')
let { MYSQL_CONFIG } = require('../config')
let db = mysql.createConnection(MYSQL_CONFIG)
async function useMysql() {
  await db.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }
    console.log('数据库已连接成功：===> connected as id ' + db.threadId)
  })
}

module.exports = { db, useMysql, mysql }
