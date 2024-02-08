import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Email from "../components/Email";
import User from '../Image/User.png';


const ContactDetail = (props) => {

    // console.log(props);
    const { name, email } = props.location.state.contact;

    return (
        <div id='banner_lay'>
            <Container id="con_list">
                <Row>
                    <Col lg={4} md={4} sm={12} >
                        <div className='contact_add'>
                            <h5>CONTACT DETAIL</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <Link to="/contact_list"><Button size="sm" variant="outline-success" className='btn_p' type="submit">Back To Contact List</Button></Link>
                        </div>
                    </Col>
                    <Col lg={8} md={8} sm={12} >
                        <div className='contact_Detail'>
                            <div className="detail_list">
                                <img src={User} className="" alt="Profile" />
                                <h2 className="header">{name}</h2>
                                <p>{email}</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
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

export default ContactDetail;