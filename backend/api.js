const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { title } = require('process');

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

app.route('/haikus/history')
    .get((req, res) =>
        res.send(JSON.stringify(getHaikuHistory(), null, 2))
    );

app.route('/haikus/my-haiku/:poemID')
    .get((req, res) =>
        res.send(JSON.stringify(getHaiku(req.params.poemID), null, 2))
    );

app.route('/haikus/create')
    .get((req, res) =>
        res.send(JSON.stringify(getThemes(), null, 2))
    );

app.route('/haikus/create/:themeID')
    .get((req, res) =>
        res.send(JSON.stringify(getHaikuLines(req.params.themeID), null, 2))
    )
    .post((req, res) => {
        console.log(req.body);
        var title = req.body.title;
        var line1 = req.body.line1;
        var line2 = req.body.line2;
        var line3 = req.body.line3;
        var themeID = req.params.themeID

        var statement1 = db.prepare(`INSERT INTO Poem (title, typeID) VALUES (?, ?)`);
        statement1.run(title, 1);

        var statement2 = db.prepare(`INSERT INTO Poem_Haikuline (poemID, haikuLineID) VALUES((SELECT poemID FROM Poem WHERE title = ?), (SELECT haikuLineID FROM haikuLine WHERE line = ?))`);
        statement2.run(title, line1)

        var statement3 = db.prepare(`INSERT INTO Poem_Haikuline (poemID, haikuLineID) VALUES((SELECT poemID FROM Poem WHERE title = ?), (SELECT haikuLineID FROM haikuLine WHERE line = ?))`);
        statement3.run(title, line2)

        var statement4 = db.prepare(`INSERT INTO Poem_Haikuline (poemID, haikuLineID) VALUES((SELECT poemID FROM Poem WHERE title = ?), (SELECT haikuLineID FROM haikuLine WHERE line = ?))`);
        statement4.run(title, line3)

        var statement5 = db.prepare(`INSERT INTO HaikuLine(line, lineNumber, themeID) VALUES (?, ?, ?)`);
        statement5.run(line1, 1, themeID);

        var statement6 = db.prepare(`INSERT INTO HaikuLine(line, lineNumber, themeID) VALUES (?, ?, ?)`);
        statement6.run(line2, 2, themeID);

        var statement7 = db.prepare(`INSERT INTO HaikuLine(line, lineNumber, themeID) VALUES (?, ?, ?)`);
        statement7.run(line3, 3, themeID);
    });

app.route('/haikus/titles')
    .get((req, res) =>
        res.send(JSON.stringify(getHaikuTitles(), null, 2))
    )

app.route('/haikus/titles/:poemID')
    .get((req, res) =>
        res.send(JSON.stringify(getHaiku(req.params.poemID), null, 2))
    );

app.route('/exquisite-corpses/history')
    .get((req, res) =>
        res.send(JSON.stringify(getExquisiteCorpseHistory(), null, 2))
    );

app.route('/exquisite-corpses/select')
    .get((req, res) =>
        res.send(JSON.stringify(getTitles(), null, 2))
    );

app.route('/exquisite-corpses/select/:poemID')
    .get((req, res) =>
        res.send(JSON.stringify(getExquisiteCorpseLines(req.params.poemID), null, 2))
    )
    .post((req, res) => {
        console.log(req.body);
        var poemID = req.params.poemID;
        var line = req.body.line;
        var username = req.body.username;

        var statement = db.prepare(`INSERT INTO ExquisiteCorpse (exquisiteCorpseLine, username, createdAt) VALUES (?, ?, ?)`);
        statement.run(line, username, Date('now'));

        var statement2 = db.prepare(`INSERT INTO Poem_ExquisiteCorpse (poemID, exquisiteCorpseID) VALUES (?, (SELECT exquisiteCorpseID FROM ExquisiteCorpse WHERE exquisiteCorpseLine = ?))`);
        statement2.run(poemID, line);
    });

app.route('/constrained-poems/history')
    .get((req, res) =>
        res.send(JSON.stringify(getConstrainedPoemHistory(), null, 2))
    );

app.route('/constrained-poems/create')
    .get((req, res) =>
        res.send(JSON.stringify(getRandomConstraint(), null, 2))
    )
    .post((req, res) => {
        console.log(req.body);
        var title = req.body.title;
        var text = req.body.text;
        var description = req.body.description.description;

        var statement = db.prepare(`INSERT INTO Poem (title, text, ruleID, typeID) VALUES (?, ?, (SELECT ruleID FROM Rule WHERE description = ?), ?)`);
        statement.run(title, text, description, 3);
    });

app.route('/constrained-poems/:poemID')
    .get((req, res) =>
        res.send(JSON.stringify(getConstrainedPoemByPoemID(req.params.poemID), null, 2))
    );

app.route('/constrained-poems')
    .get((req, res) =>
        res.send(JSON.stringify(getConstrainedPoems(), null, 2))
    );

function getHaikuHistory() {
    const haikuHistory = db.prepare('SELECT * FROM History WHERE historyID = 1').all();
    return haikuHistory;
}

function getHaiku(poemID) {
    const haiku = db.prepare(`SELECT * FROM HaikuLine JOIN Poem_HaikuLine ON HaikuLine.haikuLineID = Poem_HaikuLine.haikuLineID JOIN Poem ON Poem_HaikuLine.poemID = Poem.poemID WHERE typeID = 1 AND Poem.poemID = ${poemID}`).all();
    return haiku;
}

function getThemes() {
    const titles = db.prepare('SELECT * FROM Themes').all();
    return titles;
}

function getTitles() {
    const themes = db.prepare('SELECT * FROM Poem WHERE typeID = 2').all();
    return themes;
}

function getExquisiteCorpseLines(poemID) {
    const lines = db.prepare(`SELECT * FROM ExquisiteCorpse JOIN Poem_ExquisiteCorpse ON ExquisiteCorpse.exquisiteCorpseID = Poem_ExquisiteCorpse.exquisiteCorpseID JOIN Poem ON Poem_ExquisiteCorpse.poemID = Poem.poemID WHERE Poem.poemID = ${poemID}`).all();
    return lines;
}

function getHaikuLines(themeID) {
    const haikuLines = { haikuLine1: [], haikuLine2: [], haikuLine3: [] };

    const line1 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 1 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine1 = line1;

    const line2 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 2 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine2 = line2;

    const line3 = db.prepare(`SELECT * FROM HaikuLine WHERE themeID = ${themeID} AND lineNumber = 3 ORDER BY RANDOM() LIMIT 3`).all();
    haikuLines.haikuLine3 = line3;

    return haikuLines;
}

function getExquisiteCorpseHistory() {
    const haikuHistory = db.prepare('SELECT * FROM History WHERE historyID = 2').all();
    return haikuHistory;
}

function getConstrainedPoemHistory() {
    const haikuHistory = db.prepare('SELECT * FROM History WHERE historyID = 3').all();
    return haikuHistory;
}

function getRandomConstraint() {
    const randomConstraint = db.prepare('SELECT description FROM Rule ORDER BY RANDOM() LIMIT 1').get();
    return randomConstraint;
}

function getConstrainedPoemByPoemID(poemID) {
    const constrainedPoem = db.prepare(`SELECT title, text FROM Poem WHERE poemID = ${poemID} AND typeID = 3`).get();
    return constrainedPoem;
}

function getConstrainedPoems() {
    const constrainedPoems = db.prepare(`SELECT Poem.poemID, Poem.text, Poem.title, Rule.ruleID, Rule.description FROM Poem JOIN Rule ON Poem.ruleID = Rule.ruleID WHERE typeID = 3 ORDER BY RANDOM() LIMIT 10`).all();
    return constrainedPoems;
}

function getHaikuTitles() {
    const titles = db.prepare('SELECT poemID, title FROM Poem WHERE typeID = 1').all();
    return titles;
}