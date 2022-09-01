import React, { useState, useEffect } from "react";

import { Container, Row, Col } from 'react-bootstrap'
import { CloudArrowDown } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';


import head from './image/head.png'


export const Banner = () => {

    const [loopNum, setloopNum] = useState(0)
    const [isDeleting, setisDeleting] = useState(false)
    const toRotate = ["Web Developer", "Odoo Programmer", "Unity Game Programmer"]
    const [text, settext] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    const periode = 2000


    useEffect(() => {
        let pengetikan = setInterval(() => {
            tick()

        }, delta)
        return () => { clearInterval(pengetikan) }
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatetext = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        settext(updatetext)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatetext === fullText) {
            setisDeleting(true)
            setDelta(periode)
        } else if (isDeleting && updatetext === '') {
            setisDeleting(false)
            setloopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <span className="tagline mb-5 text-white">
                            Welcome to Potofolio About Rama

                        </span>

                        <h1>{`Hi I'm `}</h1>
                        <h2 className="mb-5">{`Rama Dhea Yudhistira`}</h2>
                        <h4><span className="wrap">{text}</span></h4>

                        <p className="intro mt-3 text-white">
                            I am a student of Informatics Engineering at Pamulang University.
                            I have great desire and ambition to learn and develop in the world of Software Engineer,
                            especially in the fields of Web Developer, Mobile Developer, ERP Software, and Cyber ​​Security.
                        </p>
                        <Button className='btnini btn-sm mt-5 shadow-sm px-3 py-2 text-white btnini' style={{ backgroundColor: '#ff000000',border: 'none' }} href="https://drive.google.com/file/d/1wKs8IFVfomCsHPcgTUwTVFN3qLHuI8uy/view?usp=sharing" target="_blank" >Download CV{' '}{' '}   <CloudArrowDown size={25} /></Button>{' '}

                    </Col>
                    <Col xs={12} md={6} xl={6}>

                        <img src={head} alt="head" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}