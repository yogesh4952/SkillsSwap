import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './db/db.js';
import { verifyWebhook } from '@clerk/express/webhooks';
import { clerkMiddleware } from '@clerk/express';
import './instrument.js';
import * as Sentry from '@sentry/node';
import User from './models/userModel.js';

dotenv.config();

const app = express();

// Clerk webhooks
app.post(
  '/api/webhooks',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    try {
      const evt = await verifyWebhook(req, {
        secret: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
      });

      console.log(evt);

      const eventType = evt.type;

      if (eventType == 'user.created') {
        const newUser = await User.create({
          clerkId: evt.data.id,
          firstname: evt.data.first_name,
          lastname: evt.data.last_name,
          email: evt.data.email_addresses,
          imageUrl: evt.data.image_url,
          lastActiveAt: evt.data.last_active_at,
          phonenumber: evt.data.phone_numbers,
        });
      } else if (eventType == 'user.updated') {
        try {
          await User.findOneAndUpdate(
            { clerkId: evt.data.id },
            {
              firstname: evt.data.first_name,
              lastname: evt.data.last_name,
              imageUrl: evt.data.image_url,
              updatedAt: updatedTime,
            },
            { new: true, upsert: false }
          );

          return res.json({
            status: 'success',
            message: 'Updated succesfully',
          });
        } catch (error) {
          return res.json({
            success: false,
            message: error.message,
          });
        }

        // Optionally update your MongoDB user document
      } else if (eventType === 'user.deleted') {
        try {
          const { clerkId } = evt.data;

          await User.findByIdAndDelete(clerkId);
          return res.json({
            success: true,
            message: 'User deleted succesfully',
          });
        } catch (error) {
          return res.json({
            success: false,
            message: error.message,
          });
        }
      }
    } catch (err) {
      console.error('Error verifying webhook:', err);
      return res.status(400).send('Error verifying webhook');
    }
  }
);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(clerkMiddleware());

app.use(
  cors({
    origin: 'http://localhost:5173', // Frontend origin
    credentials: true, // Allow credentials (cookies, Authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  })
);

// Basic route
app.get('/', (req, res) => {
  res.send('I am alive');
});

// Sentry configurations

app.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('My first Sentry error!');
});

// Connect database
await connectDB();

// Express server connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
