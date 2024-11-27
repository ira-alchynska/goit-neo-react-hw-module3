import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
        {contacts.map((contact) => (
            <Contact
                key={contact.id}
                contact={contact}
                onDeleteContact={onDeleteContact}
            />
        ))}
    </ul>
);

export default ContactList;
