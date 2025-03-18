const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create a table for storing form data
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age TEXT NOT NULL,
            gender TEXT
        )`);
    }
});

module.exports = db;