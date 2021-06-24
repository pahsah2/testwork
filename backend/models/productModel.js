import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    descript: {
      type: String,
      required: true,
    },
    category:
      {
      categoryname: { type: String, required: true },
      categorydescript: { type: String, required: true },
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Product = mongoose.model('Product', productSchema)

export default Product
