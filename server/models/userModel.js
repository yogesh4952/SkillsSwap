import mongoose, { Mongoose } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },


    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    role: {
      type: String
    },

    email: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
    },

    location: {
      longitude: { type: String },
      latitude: { type: String },
    },


    imageUrl: {
      type: String,
    },

    teach: {
      type: [String], // array of Strings
    },

    wants: {
      type: [String], // array of Strings
    },

    rating: {
      type: Number,
      default: 0,
    },

    phonenumber: {
      type: Number,
    },

    lastActiveAt: {
      type: Date,
    },

    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
