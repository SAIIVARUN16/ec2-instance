const express = require('express');
const app = express();
const port = 80; // Specify the port you want to use

app.get('/', (req, res) => {
    res.send("Hello Saii Varun M R from AWS Virtual Server");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
