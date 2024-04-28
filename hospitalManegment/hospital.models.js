import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adressLine1: {
      typeo: String,
      required: true,
    },
    adressLine2: {
      typeo: String,
      required: true,
    },
    city: {
      typeo: String,
      required: true,
    },
    Pincode: {
      typeo: String,
      required: true,
    },
    specialist: {
      typeo: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
