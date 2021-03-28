let { useRouter } = require('./middleware/MiddlewareRouter')
let { useMysql } = require('./middleware/MiddlewareMysql')
let { PORT, APP } = require('./config')

async function bootstrap() {
  await useMysql()
  await useRouter(APP)
  APP.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`)
  })
}
bootstrap()
