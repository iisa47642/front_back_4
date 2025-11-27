function ContactItem({ contact, onDelete }) {
    return (
        <li className="contact-item">
            <div className="contact-info">
                <strong>{contact.name}</strong>
                <span>{contact.phone}</span>
            </div>
            <button onClick={() => onDelete(contact.id)} className="delete-btn">
                Удалить
            </button>
        </li>
    );
}

export default ContactItem;