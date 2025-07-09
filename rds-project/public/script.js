// public/script.js
document.getElementById('showContacts').addEventListener('click', fetchContacts);

async function fetchContacts() {
    try {
        const response = await fetch('/contacts');
        const contacts = await response.json();

        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = ''; // Clear previous list

        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${contact.username} 
                <button class="delete-button" onclick="deleteContact(${contact.id})">Delete</button>
            `;
            contactsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
    }
}

async function deleteContact(id) {
    try {
        const response = await fetch(`/delete/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Contact deleted successfully');
            fetchContacts(); // Refresh the contact list
        } else {
            alert('Failed to delete contact');
        }
    } catch (error) {
        console.error('Error deleting contact:', error);
    }
}
