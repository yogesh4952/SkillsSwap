import express from 'express';
import { getAllUserData, getUserData, updateUserData, updateUserLocation, uploadImage } from '../controllers/user.js';
import { requireAuth } from '@clerk/express';
import multer from 'multer';

const upload = multer({ dest: "uploads/" })

const route = express.Router();

route.get('/', requireAuth(), getUserData);
route.get('/getAllData', requireAuth(), getAllUserData)
route.put('/update-data', requireAuth(), updateUserData);
route.put('/update-location', requireAuth(), updateUserLocation);
route.post('/update-image', requireAuth(), upload.single("profile"), uploadImage);

export default route;
