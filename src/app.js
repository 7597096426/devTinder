const express = require('express');
const app = express();
const { adminMiddlware } = require('./middleware/admin');

// Middleware for admin routes
app.use('/admin', adminMiddlware);

// Admin routes
app.get('/admin/getAllUser', (req, res) => {
    res.send('all users data');
});

app.get('/admin/getProductList', (req, res) => {
    res.send('all product list data');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found'); 
});

app.listen(7777, () => {
    console.log('server running successfully');
});
