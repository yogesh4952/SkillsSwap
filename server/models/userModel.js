import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  firstname: {
    type: string,
    required: true,
  },
  lastname: {
    type: string,
    required: true,
  },
});

export default mongoose.model('Activity', activitySchema);
