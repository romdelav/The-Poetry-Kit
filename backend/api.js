const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const dbConnection = path.join(__dirname + '/database/Poetry_Kit.db');
console.log(dbConnection);
const db = require('better-sqlite3')(dbConnection, { verbose: console.log });

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.route('/haikus/create')
    .get((req, res) =>
        res.send(JSON.stringify(getHaikuThemes(), null, 2))
    );

app.route('/haikus/create/:themeID')
    .get((req, res) =>
        res.send(JSON.stringify(getHaikuLines(), null, 2))
    );

app.route('/constrained-poems/create')
    .get((req, res) =>
        res.send(JSON.stringify(getRandomConstraint(), null, 2))
    )
    .post((req, res) => {
        console.log(req.body);

        var text = req.body.text;
        var description = req.body.description;

        var statement = db.prepare(`INSERT INTO Poem (text, ruleID, typeID) VALUES (?, (SELECT ruleID FROM Rule WHERE description = ?), ?)`);
        statement.run(text, description, 3);
    });

function getHaikuThemes() {
    const haikuThemes = db.prepare('SELECT * FROM Themes').all();
    return haikuThemes;
}

function getHaikuLines(themeID) {
    const haikuLines = { haikuLine1: [], haikuLine2: [], haikuLine3: [] };

    const line1 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 1 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine1 = line1.haikuLine1;

    const line2 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 2 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine2 = line2.haikuLine2;

    const line3 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 3 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine3 = line3.haikuLine3;

    return haikuLines;
}

function getRandomConstraint() {
    const randomConstraint = db.prepare('SELECT description FROM Rule ORDER BY RANDOM() LIMIT 1').get();
    return randomConstraint;
}