import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Email from "../components/Email";
import { Link } from "react-router-dom";



const users = [
    {
        id: "1",
        phonenumber:"9677887986",
        tittle: "Web Developer",
        description: "This most wanted Technologies"
    },
    {
        id: "2",
        phonenumber:"9677887986",
        tittle: "Web Developer",
        description: "This most wanted Technologies"
    }
];


class Todo extends React.Component {


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
                        <Col lg={5} md={12} sm={12}>
                            <div className='form_con'>
                                <Form >
                                    <Form.Group className="mb-3">
                                        <Form.Control id="name" name="name"
                                            type="text" placeholder="Tittle" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control id="number" name="number"
                                            type="number" placeholder="Phone Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Control id="des" as="textarea" type="text" rows={3} placeholder="Description" />
                                    </Form.Group>

                                    <Button variant="warning" className='btn_p' type="submit">ADD</Button>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={7} md={12} sm={12}>
                            <div className='todo_list'>

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

export default Todo;
