const express = require('express');
const { env } = require('process');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("HOMEPAGE");
})

app.listen(PORT, () =>{
    console.log("Listening");
})