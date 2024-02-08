import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Email() {
    return (
        <div>
            <Container id="banner2">
                <Row>
                    <div className='email_claim'>
                        <h2>Let's Make Consultation With Us!</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>
                        <div className='email_in'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Enter Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="warning" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                        <div className='term_con'>
                            <p>All rights reserved © 2023 Rishabh Manjunath </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );

}

export default Email;