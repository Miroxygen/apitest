import axios from "axios"
import 'dotenv/config'

export class SubscriberController {
  constructor() {

  }

  postSubscriber(req, res, next) {
    try {
      const requestData = {
        url : req.body.url,
        clientSecret : req.body.secret
      }
      axios.post(process.env.SUBSCRIBE_URL, requestData, {
        headers: {
          "Authorization": "Bearer " + process.env.BEARER_TOKEN,
          "Content-Type": "application/json"
        }
      })
    } catch (error) {
      console.log(error)
      res.send("Error submitting data")
    }
  }
}