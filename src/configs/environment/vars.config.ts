require("dotenv/config");
type TMySql = {
  DB_HOST: string | undefined;
  DB_USER: string | undefined;
  DB_PASSWORD: string | undefined;
  DB_PORT: string | undefined;
  DB_DATABASE: string | undefined;
  DB_CONNECTION_LIMIT: number | undefined;
};

type TMongo = {
  DB_URL: string | undefined;
  DB_USER: string | undefined;
  DB_PASS: string | undefined;
  DB_DATABASE: string | undefined;
};

type TDataSource = {
  mySqlDataSource: TMySql;
  mongoDataSource: TMongo;
};

const DATA_SOURCES: TDataSource = {
  mySqlDataSource: {
    DB_HOST: process.env.MY_SQL_DB_HOST,
    DB_USER: process.env.MY_SQL_DB_USER,
    DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
    DB_PORT: process.env.MY_SQL_DB_PORT,
    DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
    DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT
      ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT)
      : 4,
  },
  mongoDataSource: {
    DB_URL: process.env.MONGO_DB_URL,
    DB_USER: process.env.MONGO_DB_USER,
    DB_PASS: process.env.MONGO_DB_PASS,
    DB_DATABASE: process.env.MONGO_DB_DATABASE,
  },
};

const APP_PORT: string | undefined = process.env.PORT;

export { DATA_SOURCES, APP_PORT };
