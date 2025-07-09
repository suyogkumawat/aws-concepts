// src/routes.js
const express = require('express');
const router = express.Router();
const db = require('./database');  // Import the pool

// Route to add a username
router.post('/add', async (req, res) => {
    const { username } = req.body;
    const query = 'INSERT INTO contacts (username) VALUES (?)';

    try {
        await db.query(query, [username]);
        res.redirect('/');
    } catch (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).send('Database error');
    }
});

// Route to get all usernames
router.get('/contacts', async (req, res) => {
    const query = 'SELECT * FROM contacts';

    try {
        const [results] = await db.query(query);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).send('Database error');
    }
});

// Route to delete a contact by ID
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM contacts WHERE id = ?';

    try {
        await db.query(query, [id]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting data:', err.message);
        res.status(500).send('Database error');
    }
});

module.exports = router;
