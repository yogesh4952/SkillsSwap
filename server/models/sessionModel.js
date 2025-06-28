import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  learner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  scheduledAt: {
    type: Date,
    required: true,
  },

  durationMinutes: {
    type: Number,
    default: 60,
  },

  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Session = mongoose.model('Session', sessionSchema);
