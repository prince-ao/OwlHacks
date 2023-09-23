import mongoose from "mongoose";

export const randomSchema = new mongoose.Schema({
  questionName: String,
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
  } catch (err) {
    console.log(err);
  }
})();

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
