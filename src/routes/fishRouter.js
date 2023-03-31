import express from 'express'

export const router = express.Router()

let fishtype = "Unknown"

router.get('/', (req, res, next) => {
  res.render('fish', {fishtype})
})

router.post('/', (req, res, next) => {
  fishtype  = req.body
  console.log(fishtype.species)
  res.sendStatus = 200
  res.render('fish', {fishtype})
})