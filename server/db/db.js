import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionURI = process.env.MONGODB_URI;
    await mongoose.connect(connectionURI);
    console.log(`Database connected succesfully`);
  } catch (error) {
    console.error('Cannot connect to the database', error.message);
  }
};

export default connectDB;
