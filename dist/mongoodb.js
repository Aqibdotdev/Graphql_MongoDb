import mongoose from "mongoose";
export const connectMongooseClient = async () => await mongoose
    .connect(process.env.MONGO_DB_URL || "")
    .then(() => {
    console.log("connected to db");
})
    .catch((e) => {
    console.log('url: ', process.env.MONGO_DB_URL);
    console.log(e);
    console.log("connection failed");
});
