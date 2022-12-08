import { connect, set } from "mongoose";
import { DATA_SOURCES } from "../../environment";

const { DB_USER, DB_PASS, DB_URL, DB_DATABASE } = DATA_SOURCES.mongoDataSource;

export const connectMongoDb = async () => {
  const urlConnection = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.0thlhok.${DB_URL}.net/${DB_DATABASE}?retryWrites=true&w=majority`;
  
  set("strictQuery", false);

  await connect(urlConnection)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err: any) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
};
