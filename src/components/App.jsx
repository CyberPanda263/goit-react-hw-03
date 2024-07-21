import { useState, useEffect } from 'react';
import startContacts from '../Contacts.json';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox'
function App() {

  const title = "PhoneBook";

  /*const [Constacts, setContats] = useState( 
    startContacts 
  ); */

  const [Constacts, setContats] = useState(() => {
    const saveFeedBack = JSON.parse(window.localStorage.getItem('Constact'));
      if(saveFeedBack) {
        return saveFeedBack;
      }
      return startContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('Constact', JSON.stringify(Constacts));
  }, [Constacts]);


  const [FilterContacts, setFilterContacts] = useState("");

  const getId = () => {
    const idArr = [];
    Constacts.map((id) => {
      return idArr.push(id);
    })
    return idArr.length + 1;
  }

  const addContact = (newContact) => {
    setContats((prevcontacts) => {
      return [...prevcontacts, newContact];
    })
  }

  const removeContact = (contactId) => {
    setContats((prevcontacts) => {
      return prevcontacts.filter((contact) => contact.id !== contactId)
    })
  }

  const constsFiltering = Constacts.filter(contact => 
    contact.name.toLocaleLowerCase().includes(FilterContacts.toLocaleLowerCase())
  );
  
  return (
    <div>
      <h1>{title}</h1>
      <ContactForm
        getId={getId}
        addContact={addContact}
      />
      <SearchBox 
        FilterContacts={FilterContacts}
        setFilterContacts={setFilterContacts}
      />
      <ContactList
        Constacts={constsFiltering}
        removeContact={removeContact}
      />
    </div>
  )
}

export default App