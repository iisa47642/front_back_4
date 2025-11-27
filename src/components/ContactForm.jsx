import { useState } from 'react';

function ContactForm({ onAdd }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;

        onAdd({
            id: Date.now(),
            name: name.trim(),
            phone: phone.trim(),
        });

        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>Добавить контакт</h2>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default ContactForm;