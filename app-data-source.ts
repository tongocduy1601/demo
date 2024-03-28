import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "oracle",
  host: "localhost",
  port: 1521,
  username: "C##Basbara",
  password: "Tnd2512",
  database: "FREE",
  entities: ["src/entity/*.{ts,js}"],
  logging: true,
  synchronize: true,
});
