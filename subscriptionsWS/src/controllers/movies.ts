import mongoose from "mongoose";

export const countMovies = async () => {
    const count = await mongoose.connection.db.collection('Shows').countDocuments()
    return count
}