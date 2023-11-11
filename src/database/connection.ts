import mongoose, { ConnectOptions } from 'mongoose';

const dbURI: string = Bun.env.MONGO_URL?Bun.env.MONGO_URL:"";

export const connectMongoDB = async (): Promise<void> => {
    try {
      await mongoose.connect(dbURI);
      console.log("connected to mongodb");
    } catch (error) {
      console.error(error);
    }
  };

