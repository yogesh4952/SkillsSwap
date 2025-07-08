import mongoose, { Mongoose } from 'mongoose';
import { z } from 'zod'


const userSchema = new mongoose.Schema(
  {
    clerkId: z.string().min(1, 'Clerk ID is required'),


    firstname: z.string().min(2, 'Firstname must be the length greater than 2'),

    lastname: z.string(),

    role: z.string(),
    email: z.string().email("Invalid Email"),

    bio: z.string(),

    location: z.object({
      longitude: z.string().optional(),
      latitude: z.string().optional(),
    }),


    imageUrl: z.string().url().optional(),

    teach: z.array(z.string().optional()),

    wants: z.array(z.string().optional()),


    rating: z.number().min(0).max(5).optional(),

    phonenumber: z.number().optional(),

    lastActiveAt: z.date().optional(),

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
