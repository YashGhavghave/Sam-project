import mongoose from 'mongoose';

export const DB_Connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB', {
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}