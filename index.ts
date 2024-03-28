import express from "express";
import { myDataSource } from "./app-data-source";
import router from "./route/route";
import bodyParser = require("body-parser");
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
const app = express();
app.use(bodyParser.json());
app.use(express.json());
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
  },
  apis: [`${__dirname}/route/route.ts`, "./dist/route/route.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/v1", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000);
