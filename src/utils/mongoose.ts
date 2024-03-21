import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {

  if (conn.isConnected) {
    console.log("Using existing database connection.");
    return;
  }
  const MONGO_URI = process.env.MONGOOSE_URI;
  if (!MONGO_URI) {
    throw new Error("Please add a .env file with your Mongo URI");
  }
  const db = await connect(MONGO_URI);
  console.log(`MongoDB Connected: ${db.connection.db.databaseName}`);
  conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
  console.log('MongoDB connected');
});

connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

