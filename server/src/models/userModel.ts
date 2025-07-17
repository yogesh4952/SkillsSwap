import mongoose, { Schema } from 'mongoose';

// types/user.ts
export interface IUser {
  clerkId: string;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
  bio: string;
  location?: {
    longitude?: string;
    latitude?: string;
  };
  imageUrl?: string;
  teach?: string[];
  wants?: string[];
  rating?: number;
  phonenumber?: number;
  lastActiveAt?: Date;
  connections?: string[];
}

const userSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true },
    firstname: { type: String, required: true, minlength: 2 },
    lastname: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String },
    location: {
      longitude: { type: String },
      latitude: { type: String },
    },
    imageUrl: { type: String },
    teach: { type: [String], default: [] },
    wants: { type: [String], default: [] },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    phonenumber: { type: Number },
    lastActiveAt: { type: Date, default: Date.now },
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
