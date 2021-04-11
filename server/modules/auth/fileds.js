let { mysql } = require('../../middleware/MiddlewareMysql')
let md5 = require('md5-node')

function escape(insertData) {
  Object.keys(insertData).forEach(
    key => (insertData[key] = mysql.escape(insertData[key]))
  )
  return insertData
}

function createSql(data, options) {
  let {
    rief_content,
    category_id,
    cover_image,
    edit_type,
    html_content,
    is_english,
    is_gfw,
    is_original,
    link_url,
    mark_content,
    tag_ids,
    title,
    reference
  } = escape(data)
  let sql = ''
  switch (options.type) {
    case 'insert':
      sql = `
        INSERT INTO article SET 
        rief_content = ${rief_content},
        category_id = ${category_id},
        cover_image = ${cover_image},
        edit_type = ${edit_type},
        html_content = ${html_content},
        is_english = ${is_english},
        is_gfw = ${is_gfw},
        is_original = ${is_original},
        link_url = ${link_url},
        mark_content = ${mark_content},
        tag_ids = ${tag_ids},
        title = ${title},
        reference = ${reference},
        article_id = '${md5(String(Date.now()))}',
        create_time = ${Date.parse(new Date())},
        update_time = ${Date.parse(new Date())}
      `
      break
    case 'update':
      sql = `
        UPDATE article SET 
        title = ${title},
        rief_content = ${rief_content},
        mark_content = ${mark_content},
        update_time = ${Date.parse(new Date())},
        is_original = ${is_original},
        tag_ids = ${tag_ids},
        cover_image = ${cover_image},
        reference = ${reference},
        link_url = ${link_url}
        WHERE article_id = '${options.id}'
      `
      break
    case 'delete':
      sql = `
        DELETE FROM article WHERE article_id = '${options.id}'
      `
      break
    case 'select':
      sql = `
        SELECT * FROM article WHERE article_id = '${options.id}'
      `
      break
  }
  return sql
}

module.exports = {
  escape,
  createSql
}
