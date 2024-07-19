import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({Constacts}) => {

    return (

        <ul className={css.contactsList}>
            {Constacts.map((contact) => (
                <li className={css.contactCard} key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ContactList