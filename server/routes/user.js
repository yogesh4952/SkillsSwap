import express from 'express';
import { getAllUserData, getUserData, updateUserData, updateUserLocation } from '../controllers/user.js';
import { requireAuth } from '@clerk/express';

const route = express.Router();

route.get('/', requireAuth(), getUserData);
route.get('/getAllData', requireAuth(), getAllUserData)
route.put('/update-data', requireAuth(), updateUserData);
route.put('/update-location', requireAuth(), updateUserLocation);

export default route;
