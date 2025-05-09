from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import os

# Create a Flask application instance
app = Flask(__name__)

@app.route('/')
def index():
    return "<h1>Hello, LibTrack!</h1>"  # Directly returning HTML

@app.route('/books')
def list_books():
    # In a real application, you'd fetch books from the database here
    books = ["Book 1", "Book 2", "Book 3"]
    return render_template('books.html', book_list=books) # Rendering an HTML template

# Configure the database URI (Uniform Resource Identifier)
# For SQLite, this specifies the path to the database file.
# We'll create a file named 'libtrack.db' in the same directory as app.py
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'libtrack.db')

# To suppress a warning about tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy extension with the Flask app
db = SQLAlchemy(app)

# Define your database models here
class Book(db.Model):
    BookID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Title = db.Column(db.Text, nullable=False)
    Author = db.Column(db.Text, nullable=False)
    ISBN = db.Column(db.Text, unique=True, nullable=False)
    Genre = db.Column(db.Text)
    PublicationYear = db.Column(db.Integer)
    TotalCopies = db.Column(db.Integer, nullable=False, default=1)
    AvailableCopies = db.Column(db.Integer, nullable=False, default=1)
    DateAdded = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f"<Book {self.Title}>"

# Run the application if this script is executed directly
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create the database tables (if they don't exist)
    app.run(debug=True, host='0.0.0.0')
