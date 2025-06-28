import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './db/db.js';
import { verifyWebhook } from '@clerk/express/webhooks';
import { clerkMiddleware } from '@clerk/express';

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

      // Do something with payload
      // For this guide, log payload to console
      // const { id } = evt.data;
      // const eventType = evt.type;
      // console.log(
      //   `Received webhook with ID ${id} and event type of ${eventType}`
      // );
      // console.log('Webhook payload:', evt.data);

      return res.send('Webhook received');
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

// Connect database
await connectDB();

// Express server connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
