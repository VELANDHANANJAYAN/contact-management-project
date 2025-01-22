import React, { useState } from 'react';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleCreate = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  const handleUpdate = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
    setEditingContact(null); // Exit edit mode after updating.
  };

  return (
    <div>
      <h1>Contact Management App</h1>
      {editingContact ? (
        <EditContact
          contact={editingContact}
          onUpdate={handleUpdate}
        />
      ) : (
        <CreateContact onCreate={handleCreate} />
      )}
      <div>
        <h2>All Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} ({contact.email}) - {contact.phone} [{contact.status}]
              <button onClick={() => setEditingContact(contact)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
