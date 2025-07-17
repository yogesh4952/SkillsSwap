import mongoose, { Schema, Document } from 'mongoose';

export interface Session extends Document {
  topic: string;
  teacher?: mongoose.Types.ObjectId;
  learner: mongoose.Types.ObjectId;
  scheduledAt?: Date;
  durationMinutes: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: Date;
}

const sessionSchema = new Schema<Session>(
  {
    topic: {
      type: String,
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    learner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    scheduledAt: {
      type: Date,
      required: false,
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
  },
  { timestamps: { createdAt: true, updatedAt: true } } // handles createdAt automatically
);

const SessionModel = mongoose.model<Session>('Session', sessionSchema);

export default SessionModel;
