import mongoose, { ConnectOptions } from 'mongoose';

const dbURI: string = 'mongodb+srv://bipin7giri:IRLouttbnPzptFnk@cluster0.2d9ffmd.mongodb.net/blogs';


export const connectMongoDB = async (): Promise<void> => {
    try {
      await mongoose.connect(dbURI);
      console.log("connected to mongodb");
    } catch (error) {
      console.error(error);
    }
  };

