const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const server = require('http').createServer(app);


app.use(express.json({limit:'50mb'}));

const corsOptions = {
    origin: process.env.CLIENT_URL || process.env.CLIENT_URL,
    credentials: true
};

app.use(cors(corsOptions));

const boardRoutes = require('./api/board/board.routes');
const authRoutes = require('./api/auth/auth.routes');

app.use('/api/board', boardRoutes);
app.use('/api/auth', authRoutes);


app.get('/api/health', (req,res) => {
    res.status(300).json({status: 'healthy', message: 'Trellopro Real-Time Backend Engine Online'})
})

const PORT = process.env.PORT || process.env.PORT;
server.listen(PORT, ()=>{
    console.log('Real Time Production Server active on port: ${PORT}')
});

