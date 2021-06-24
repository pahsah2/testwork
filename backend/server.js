import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import path from 'path'

import {
  deleteProduct,
  getProductById,
  getProducts,
  createProduct,
  updateProduct
} from './controllers/productController.js'
import {getShops,
    getShopById,
    deleteShop,
    createShop,
    updateShop } from './controllers/shopController.js'

import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use((err , req , res , next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
  })

app.get('/api/products' , getProducts);
app.post('/api/products' , createProduct);
app.get('/api/products/:id' , getProductById);
app.delete('/api/products/:id' , deleteProduct)
app.put('/api/products/:id' , updateProduct)

app.get('/api/shops' , getShops);
app.post('/api/shops' , createShop);
app.get('/api/shops/:id' , getShopById);
app.delete('/api/shops/:id' , deleteShop);
app.put('/api/shops/:id' , updateShop);

app.use('/api/upload', uploadRoutes)


const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
