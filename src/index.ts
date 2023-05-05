import express, { type Express } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './router.js'

dotenv.config();

const PORT = process.env.PORT ?? 3000

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
