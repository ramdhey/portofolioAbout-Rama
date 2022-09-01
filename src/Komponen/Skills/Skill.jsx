import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }



    return (
        <section className="skil" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Text</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="itemnya">
                                    <img src={""} alt='gambarnya' />
                                    <h5>Web Dev</h5>
                                </div>
                                <div className="itemnya">
                                    <img src={""} alt='gambarnya' />
                                    <h5>Game Dev</h5>
                                </div>
                                <div className="itemnya">
                                    <img src={""} alt='gambarnya' />
                                    <h5>Odoo</h5>
                                </div>
                                <div className="itemnya">
                                    <img src={""} alt='gambarnya' />
                                    <h5>UI Ux</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}