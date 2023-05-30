import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import * as dotenv from "dotenv";
import swaggerOptions from "./swaggerOptions.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

dotenv.config();

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

// Routes
app.use("/auth", authRouter);

app.listen(process.env.PORT);
