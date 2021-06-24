import express from 'express'
const router = express.Router()
import {
  getMyShops,
} from '../controllers/shopController.js'

router.route('/myshops').get(getMyShops)


export default router
