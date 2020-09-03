const mongoose = require("mongoose");
console.log(process.env.ATLAS_URL);
const connectDatabase = async () => {
  await mongoose.connect(
    process.env.ATLAS_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log("the connection has been connected successfully");
    }
  );
};

connectDatabase();
