import express from 'express';
import authRouter from './route/auth.js';
import userRoute from './route/user.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
// authrouter =authRouter;
app.use(authRouter);
app.use(userRoute)
app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

