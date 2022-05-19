import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  console.log("Starting up...");
  
  if (!process.env.MONGO_URI) {
    //throw new Error('MONGO_URI should be added as an environment variable');
    process.env.MONGO_URI="mongodb://localhost:27017/ctse"
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
