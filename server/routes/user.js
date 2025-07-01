import express from 'express';
import { getAllUserData, getUserData, updateUserData } from '../controllers/user.js';
import { requireAuth } from '@clerk/express';

const route = express.Router();

route.get('/', requireAuth(), getUserData);
route.get('/getAllData', getAllUserData)
route.put('/update-data', requireAuth(), updateUserData);

export default route;
