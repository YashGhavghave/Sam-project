import mongoose from 'mongoose';

export const DB_Connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://yashghavghave79_db_user:yashstudentnest@cluster0.0befzhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}