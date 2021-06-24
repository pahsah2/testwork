import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    descript: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    no: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const Shop = mongoose.model('Shop', shopSchema)

export default Shop
