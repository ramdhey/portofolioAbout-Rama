import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import egtifif from './image/85.png'
import egti from './image/80.png'
import svnfif from './image/75.png'
import svn from './image/70.png'
import sixfif from './image/65.png'
import six from './image/60.png'

import color from './image/color-sharp.png'


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
        <section className="skill" id="skill" style={{ backgroundColor: '#000000' }}>
            <Container>
                <Row>
                    <Col xs={12} md={12} xl={12}>
                        <div className="skill-box" style={{ backgroundImage: 'linear-gradient(#b9098d80,#2A7CC0,#11044b80)' }}>
                            <h2>Skills</h2>
                            
                            <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider '>
                                <div className="itemnya mt-3">
                                    <img src={egtifif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">React JS</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={egti} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">React Native</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={svnfif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Node JS</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={egti} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Express JS</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={egtifif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">MongoDB</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={svn} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Odoo Python Program</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={six} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Unity Game Programming</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={sixfif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Android Studio</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={egtifif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">Figma</h5>
                                </div>
                                <div className="itemnya  mt-3">
                                    <img src={svnfif} style={{ width: "150px", height: "150px" }} alt='gambarnya' />
                                    <h5 className="namaskill mt-3">UI UX</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={color} alt='ini' style={{ backgroundColor: '#000000' }} />

        </section>
    )
}