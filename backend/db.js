const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  
  module.exports = connectToMongo;