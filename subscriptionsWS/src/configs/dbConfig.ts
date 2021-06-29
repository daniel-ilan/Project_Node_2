import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb://localhost:27017/subscriptionsDB", { useUnifiedTopology: true, useNewUrlParser: true })
}

export default connect;