import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  console.log("Starting up...");
  if (!process.env.JWT_KEY) {
    process.env.JWT_KEY = "secret550"
    //throw new Error('JWT_KEY should be added as an environment variable');
  }
  if (!process.env.MONGO_URI) {
    //throw new Error('MONGO_URI should be added as an environment variable');
    process.env.MONGO_URI="mongodb+srv://cmt:admin123@cluster0.yjsmx.mongodb.net/cmt_testing123?retryWrites=true&w=majority"
  }
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
  }
  catch (err){
    console.error(err);
  }
  app.listen(8081, () => {
    console.log("Listenin on port 8081");
  });
};

start();
