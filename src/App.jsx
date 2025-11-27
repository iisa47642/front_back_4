import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Загрузка из localStorage при старте
    useEffect(() => {
        const saved = localStorage.getItem('contacts');
        if (saved) {
            setContacts(JSON.parse(saved));
        }
    }, []);

    // Сохранение в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (contact) => {
        setContacts((prev) => [...prev, contact]);
    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm)
    );

    return (
        <div className="app">
            <h1>Книга контактов</h1>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <ContactForm onAdd={addContact} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}

export default App;