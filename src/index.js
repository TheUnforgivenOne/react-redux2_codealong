import express from "express";
import cors from "cors";
import { productsRouter } from "./routers/productsRouter.js";

const app = express();
const PORT = 4000;

app.use(cors())
app.listen(PORT, () => console.log('Server is running on port', PORT));
app.use(express.json());
app.use('/products', productsRouter);
