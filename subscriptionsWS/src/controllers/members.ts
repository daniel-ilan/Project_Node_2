import mongoose from "mongoose";

export const countMembers = async () => {
    const count = await mongoose.connection.db.collection('Members').countDocuments()
    return count
}