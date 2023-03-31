import express from 'express'
import { router as subscribeRouter } from './subscribeRouter.js'
import { router as fishRouter } from './fishRouter.js'

export const router = express.Router()

router.get('/home', (req, res, next) => {
  res.render('index')
})

router.use('/subscribe', subscribeRouter)
router.use('/fish', fishRouter)