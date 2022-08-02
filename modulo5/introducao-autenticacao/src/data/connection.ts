import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const userTableName = "User"

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const createUser = async (id: string, email: string, password: string) => {
    await connection 
    .insert({
        id, 
        email, 
        password
    })
    .into(userTableName)
};

