const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(PORT, (res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});