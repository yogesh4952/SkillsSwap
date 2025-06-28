import { getAuth } from '@clerk/express';
import userModel from '../models/userModel.js';

export const getUserData = async (req, res) => {
  try {
    const userData = await userModel.find({});
    return res.json({
      success: true,
      message: 'Fetched successfully',
      data: userData,
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
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const { firstname, lastname, bio, location, teach, wants } = req.body;

    if ((teach && !Array.isArray(teach)) || (wants && !Array.isArray(wants))) {
      return res
        .status(400)
        .json({ success: false, message: 'Teach and wants must be arrays' });
    }

    const updateUser = await userModel.findByIdAndUpdate(
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
