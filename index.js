import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import operationRoutes from "./routes/operationRoutes.js";
import cors from "cors";
import displayRoutes from "express-routemap";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/operations", operationRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  displayRoutes(app); // Display all routes on startup
  console.log(`Server listening on PORT ${PORT}`);
});

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send("Route does not exist");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
