import express from 'express';
import authRouter from './route/auth.js';
const app = express();
app.use(express.json());
// authrouter =authRouter;
app.use(authRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

