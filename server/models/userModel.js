import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
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
});

export default mongoose.model('User', userSchema);
