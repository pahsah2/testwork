import asyncHandler from 'express-async-handler'
import Shop from '../models/shopModel.js'



// @desc    Get  shop
// @route   GET /api/shops
// @access  Private
const getShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find()
  res.json({shops})
})

const getShopById = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id)

  if (shop) {
    res.json(shop)
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})

// @desc    Delete a shop
// @route   DELETE /api/shops/:id
// @access  Public
const deleteShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id)

  if (shop) {
    await shop.remove()
    res.json({ message: 'Shop removed' })
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})

// @desc    Create a shop
// @route   POST /api/shops
// @access  Private/Admin
const createShop = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    descript,
    phone,
    no,
  } = req.body

  const shop = await Shop.create({
    name,
    image,
    descript,
    phone,
    no,
  })

  const createdShop = await shop.save()
  res.status(201).json(createdShop)
})

// @desc    Update a Shop
// @route   PUT /api/shops/:id
// @access  Public
const updateShop = asyncHandler(async (req, res) => {
  const { name, image ,  descript, phone , no } = req.body

  const shop = await Shop.findById(req.params.id)

  if (shop) {
    shop.name = name
    shop.image = image
    shop.descript = descript
    shop.phone = phone
    shop.no = no

    const updatedShop = await shop.save()
    res.json(updatedShop)
  } else {
    res.status(404)
    throw new Error('Shop not found')
  }
})

export {
  getShops,
  getShopById,
  deleteShop,
  createShop,
  updateShop
}
