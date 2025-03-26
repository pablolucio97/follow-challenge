import cors from "cors";
import "dotenv/config";
import express, { RequestHandler } from "express";
import { sequelizeDb } from "./config/database";
import { responseMiddleware } from "./infra/middlewares/response.middleware";
import { userRateLimiter } from "./infra/middlewares/userRateLimiter.middleware";
import "./infra/models";
import "./infra/models/associations";
import { routes } from "./infra/routes";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(responseMiddleware as RequestHandler);
app.use(userRateLimiter);
app.use(cors());
app.use(routes);

sequelizeDb
  .sync()
  .then(() => {
    console.log("📦 Database synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "Unable to connect to the database, server was not started: ",
      error
    );
  });
