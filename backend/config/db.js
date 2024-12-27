import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/mern");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); //return 1 means code exit with failure, 0 means success
    }
}