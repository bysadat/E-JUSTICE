const express = require('express');
const authRoutes = require('./routes/auth');
const caseRoutes = require('./routes/cases');
const messageRoutes = require('./routes/messages');
const paymentRoutes = require('./routes/payments');

const app = express();
//cors
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Mounting the routers.
app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app;
