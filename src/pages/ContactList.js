import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ContactCard from "./ContactCard.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Email from "../components/Email";
const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
    alert("Are you Sure to remove this....!");
    return;
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
    );
  });
  return (
    <div id='banner_lay'>
      <Container id="con_list">
        <Row>
          <Col lg={4} md={4} sm={12} >
            <div className='contact_add'>
              <h5>CONTACT LIST</h5>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <Link to="/add"><Button size="sm" variant="outline-success" className='btn_p' type="submit">ADD CONTACT</Button></Link>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} >
            <div className='contact_list'>
              {renderContactList}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mar_top">
      <Email />
      </div>
    </div>
  )
}

export default ContactList;