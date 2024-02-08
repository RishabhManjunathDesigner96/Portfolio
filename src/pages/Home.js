import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "../components/NavBar"
import Email from "../components/Email"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import bg from '../Image/bg.webp';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <NavBar />
            <div id='banner_lay'>
                <Container id="banner1">
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <div className='banne_head'>
                                <h1>Hello I’M <span className='d_color'>Rishabh </span>Web Developer</h1>
                                <h4>I'M GLAD YOU'RE HERE</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <Button variant="primary">About</Button><Link to="/contact_list"><Button variant="warning">Contact</Button></Link>

                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} >
                            <div className='banne_img'>
                                <img className='img_responsive b_pop' alt='We_banne' src={bg}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Email />
        </div>
    );

}

export default Home;