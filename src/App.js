import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import ContactList from './pages/ContactList';
import ContactDetail from './pages/ContactDetail';
import About from './pages/About';
import { v4 as uuidv4 } from 'uuid';
import api from "./api/contacts";
import EditContact from "./pages/EditContact";

function App() {

  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //Retrive Contacts

  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandlar = async (contact) => {
    console.log(contact);

    const request = {
      id: uuidv4(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };


  const updateContactHandlar = async (contact) => {

    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };


  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();

  }, []);

  useEffect(() => {
    // if (contacts.length > 0) {
    //   console.table(contacts);
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }
  }, [contacts]);


  return (
    <Router>
      <Route exact path="https://rishabhmanjunathdesigner96.github.io/portfolio" component={Home} />

      <Route path="/contact_list" render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)} />
      <Route path="/add" render={(props) => (<AddContact {...props} addContactHandlar={addContactHandlar} />)} />
      <Route path="/edit" render={(props) => (<EditContact {...props} updateContactHandlar={updateContactHandlar} />)} />
      <Route path="/contact/:id" component={ContactDetail}></Route>
      <Route path="/about"><About/></Route>
    </Router>
  );
}

export default App;