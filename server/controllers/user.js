import { rewriteFramesIntegration } from '@sentry/node';
import userModel from '../models/userModel.js';
import multer from 'multer'



export const getAllUserData = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const findUser = await userModel.findOne({ clerkId: userId })
    if (findUser) {
      const data = await userModel.find({})
      return res.json({
        success: true,
        data
      })
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

export const getUserData = async (req, res) => {
  try {
    const userId = req.auth.userId;
    if (userId) {
      const data = await userModel.findOne({ clerkId: userId });
      return res.json({
        success: true,
        message: 'Fetched successfully',
        data,
      });
    }
    return res.json({
      success: false,
      message: 'Invalid access',
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const userId = req.auth().userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const { firstname, lastname, bio, location, teach, wants } = req.body;

    if ((teach && !Array.isArray(teach)) || (wants && !Array.isArray(wants))) {
      return res
        .status(400)
        .json({ success: false, message: 'Teach and wants must be arrays' });
    }

    const updateUser = await userModel.findOneAndUpdate(
      { clerkId: userId },
      { $set: { firstname, lastname, bio, location, teach, wants } },
      { new: true, runValidators: true }
    );

    if (!updateUser) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'User updated successfully',
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUserLocation = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { longitude, latitude } = req.body;
    console.log(req.body)
    const updatedUser = await userModel.findOneAndUpdate({ clerkId: userId }, {
      $set: {
        'location.longitude': longitude,
        'location.latitude': latitude
      }
    },
      { new: true })
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Location updated', user: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

}


const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const clerkId = req.auth
    console.log(clerkId)
    if (file) {
      const updatedData = await userModel.find({ clerkId: id })

    }
  } catch (error) {

  }
}