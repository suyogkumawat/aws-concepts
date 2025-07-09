// src/database.js
const mysql = require('mysql2/promise');  // Note: promise-based MySQL library

// Define database configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '',
    connectionLimit: 10,  // Number of connections allowed at a time
};

// Define database name separately
const dbName = process.env.DB_NAME || 'my_app_db';

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

async function setupDatabase() {
    try {
        // Get a connection from the pool (initially without the database name)
        const connection = await pool.getConnection();

        // Create the database if it does not exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
        console.log(`Database "${dbName}" is ready.`);

        // Use the created database
        await connection.query(`USE \`${dbName}\``);
        console.log(`Using database "${dbName}"`);

        // Create the table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL
            )
        `;
        await connection.query(createTableQuery);
        console.log('Table "contacts" is ready.');

        // Release the connection back to the pool
        connection.release();
    } catch (err) {
        console.error('Error during database setup:', err.message);
    }
}

// Call the setup function
setupDatabase();

module.exports = pool;
