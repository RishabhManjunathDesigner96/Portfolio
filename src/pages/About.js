import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "../components/NavBar"
import Email from "../components/Email"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    return (
        <div>
            <NavBar />
            <div id='banner_lay'>
                <Container id="banner1">
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <div className='banne_head'>
                                <h1>About <span className='d_color'>My Selfe</span></h1>
                                <h4>Rishabh Manjunath - UI / UX Developer</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} >
                            <div className='banne_progress'>
                                <div className='progress_bar_effect'>
                                    <h3>Html5, Html</h3>
                                    <ProgressBar striped variant="success" animated now={90} />
                                    <h3>Css3 | Sass | Materialize Css</h3>
                                    <ProgressBar striped variant="info" animated now={80} />
                                    <h3>Bootstrap5 | Grid |React-Bootstrap</h3>
                                    <ProgressBar striped variant="warning" animated now={95} />
                                    <h3>JQuery | JavaScript</h3>
                                    <ProgressBar striped variant="danger" animated now={70} />
                                    <h3>React Js</h3>
                                    <ProgressBar striped variant="primary" animated now={70} />

                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={6} sm={12} >
                            <div className='banne_head'>
                                <p>It is a long established fact that a reader will be distracted by It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. the readable content of a page when looking at its layout.long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Email />
        </div>
    );

}

export default About;