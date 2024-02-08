import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Email from "../components/Email";
import { Link } from "react-router-dom";

class AddContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fiels are Mandatory....!");
      return;
    }
    this.props.addContactHandlar(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/contact_list");
    console.log(this.state);
  };


  render() {
    return (
      <><div id='banner_lay'>
        <Container >
          <div className='cont_logout'>
            <Link to="/register"><p>Logout</p></Link>
          </div>
        </Container>
        <Container id="Contact_li">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className='contact_info'>
                <h5>CONTACT INFO</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
              <div className='form_con'>
                <Form onSubmit={this.add}>
                  <Form.Group className="mb-3">
                    <Form.Control id="name" name="name" value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder="Enter Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control id="email" name="email" value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })} type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Button variant="warning" className='btn_p' type="submit">ADD</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div><div>
          <Email />
        </div></>

    );
  }

}

export default AddContact;
