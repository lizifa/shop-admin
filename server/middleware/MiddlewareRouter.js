let postRouter = require('../modules/post/router')
let bodyParser = require('body-parser')
let {
  ACCESSCONTROLALLOWORIGIN,
  ACCESSCONTROLALLOWHEADERS,
  ACCESSCONTROLALLOWMETHODS
} = require('../config')

async function useRouter(app) {
  app.all('*', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', ACCESSCONTROLALLOWORIGIN)
    res.set('Access-Control-Allow-Methods', ACCESSCONTROLALLOWMETHODS)
    res.set('Access-Control-Allow-Headers', ACCESSCONTROLALLOWHEADERS)
    next()
  })
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use('/api', postRouter)
}

module.exports = { useRouter }
