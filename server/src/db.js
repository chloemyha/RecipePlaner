// connect to our local database
import { MongoClient } from "mongodb";
let db;
let usersCollection; // Add a variable for the users collection
async function connectToDb(cb) {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  db = client.db("recipes");
  cb();
}
export { db, connectToDb,usersCollection } ;
