import mongoose from 'mongoose';

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

    email: {
      type: String,
      required: true,
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

    connections: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
