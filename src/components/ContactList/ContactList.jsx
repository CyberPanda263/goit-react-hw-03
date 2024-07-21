import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({Constacts, removeContact}) => {

    return (
        <div className= {css.contactsListBox}>
            <ul className={css.contactsList}>
                {Constacts.map((contact) => (
                    <li className={css.contactCard} key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            removeContact={removeContact}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList