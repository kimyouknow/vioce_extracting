const express = require('express')
const app = express()

const PORT = process.env.PORT;

const handleListenning = () => 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.get('/', function (req, res) {
    res.send('Hello World!!');
})

app.listen(PORT, handleListenning);