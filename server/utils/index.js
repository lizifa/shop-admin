function makeResponse(res, response = { code: 200 }) {
  res.json(Object.assign({code: 200, data: null, message: '获取成功', sysTime: Date.parse(new Date())}, response))
}

module.exports = {
  makeResponse
}
