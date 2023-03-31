import express from 'express'
import { SubscriberController } from '../controllers/subscribeController.js'

export const router = express.Router()

const controller = new SubscriberController

router.get('/', (req, res, next) => {
  res.render('subscribe')
})

router.post('/add-subscriber', (req, res, next) => {
  console.log('Subscriber added ' + JSON.stringify(req.body))
  controller.postSubscriber(req, res, next)
  res.redirect('/subscribe')
})