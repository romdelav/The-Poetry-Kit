const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const dbConnection = path.join(__dirname + '/database/Poetry_Kit.db');
console.log(dbConnection);
const db = require('better-sqlite3')(dbConnection, { verbose: console.log });

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});