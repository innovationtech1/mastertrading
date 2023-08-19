import express from "express";
import paymentRoutes from "./routes/payment.routes.js"
import morgan from "morgan";
import { PORT } from './config.js'

const app = express();

app.use(morgan('dev'))
app.use(paymentRoutes);


app.listen(3000);
console.log("Server on Port ", 3000);