import { Request, Response } from 'express';
import userModel from '../models/userModel.ts';
import { getAuth } from '@clerk/express'; // assuming you're using Clerk

// ✅ Get all users (only if current user exists)
export const getAllUserData = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const currentUser = await userModel.findOne({ clerkId: userId });
    if (!currentUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const allUsers = await userModel.find({});
    return res.json({ success: true, data: allUsers });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get current user
export const getUserData = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const user = await userModel.findOne({ clerkId: userId });
    return res.json({ success: true, data: user });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update user data
export const updateUserData = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const { firstname, lastname, bio, location, teach, wants } = req.body;

  if ((teach && !Array.isArray(teach)) || (wants && !Array.isArray(wants))) {
    return res.status(400).json({ success: false, message: 'Teach and wants must be arrays' });
  }

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { clerkId: userId },
      { $set: { firstname, lastname, bio, location, teach, wants } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, message: 'User updated successfully', data: updatedUser });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update only location
export const updateUserLocation = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ message: 'Unauthorized' });

  const { longitude, latitude } = req.body;

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { clerkId: userId },
      { $set: { 'location.longitude': longitude, 'location.latitude': latitude } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'Location updated', user: updatedUser });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// ✅ Upload profile image
export const uploadImage = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

  const file = req.file;

  if (!file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { clerkId: userId },
      { imageUrl: file.path },
      { new: true }
    );

    return res.json({
      success: true,
      message: "File uploaded successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
