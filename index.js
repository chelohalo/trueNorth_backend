import express from 'express';
import dotenv from 'dotenv'; 
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import operationRoutes from './routes/operationRoutes.js';
import cors from 'cors';
import displayRoutes from 'express-routemap';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

const whiteList = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function (origin, callback) {
        if(whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS error, cannot access the information'))
        }
    }
}
app.use(cors(corsOptions));

app.use('/api/users', userRoutes);
app.use('/api/operations', operationRoutes);

const PORT = process.env.PORT || 4000;

const servidor = app.listen(PORT, () => {
    displayRoutes(app);
    console.log(`listening on PORT ${PORT}`)
})
