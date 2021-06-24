import mongoose from 'mongoose'
import dotenv from 'dotenv'
import products from './data/products.js'
import Product from './models/productModel.js'
import shop from './data/shop.js'
import Shop from './models/shopModel.js'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await Shop.deleteMany()

    await Shop.insertMany(shop)
    await Product.insertMany(products)

    console.log(
      'Data Imported // ทดลองใส่ข้อมูล mongo + เทส การเชื่อมต่อ'.green.inverse
    )
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}
const destroyData = async () => {
  try {
    await Shop.deleteMany()
    await Product.deleteMany()

    console.log('Data Destroyed // ทดลองลบข้อมูล'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
