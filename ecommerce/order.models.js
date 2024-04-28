import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  prouctId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    oderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELED ', 'DELIVERED'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
