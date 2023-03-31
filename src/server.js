import express from 'express'
import { router } from './routes/router.js'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import 'dotenv/config'

try {

  const directoryFullName = dirname(fileURLToPath(import.meta.url))

  const app = express()

  app.use(express.json())

  app.set('view engine', 'ejs')
  app.set('views', join(directoryFullName, 'views'))
  app.use(express.static(join(directoryFullName, '..', 'public')))
  app.use(express.urlencoded({ extended: false }))

  app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`)
  })

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.use(`/home`, router)
} catch (error) {
  console.log(error)
}
