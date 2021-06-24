import asyncHandler from 'express-async-handler'
import Shop from '../models/shopModel.js'



// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find( {})
  res.json(shops)
})



export {
  getMyShops,
}
