import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';





function Contact() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandlar = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      console.table(contacts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);



  return (
    <div className="contact_details">
      <Router>
        <Switch>
          <Route exact path="/contact_list" component={() => <ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/" component={() => <AddContact addContactHandlar={addContactHandlar} />} />
        </Switch>

      </Router>
      {/* <AddContact addContactHandlar={addContactHandlar} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default Contact;
