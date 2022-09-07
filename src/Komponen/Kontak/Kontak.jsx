import React,{useState} from "react"
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import gambarkontak from './image/contact-img.svg'



export const Kontak = () => {
    const formPesan = {
        firstName: ' ',
        lastName: '',
        email: ' ',
        phone: ' ',
        message: ' '
    }


    const [formUntukPesan,setformUntukPesan] = useState(formPesan)
    const [buttonText,setButtonText] = useState('Send')
    const [status,setStatus] = useState({})

    onFormUpdate = (category,value) => {
        setformUntukPesan({
            ...formPesan,[category]:value
        })
    }


    const handleSubmit = () => {

    }

    return(
        <section className="kontak" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={gambarkontak} alt='kontak' />
                    </Col>
                    <Col md={6}>
                        <h2>Please, write here if there is a message for me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value = {formPesan.firstName} placeholder='First Name' onChange={(event)=>onFormUpdate('firstName',event.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value = {formPesan.lastName} placeholder='Last Name' onChange={(event)=>onFormUpdate('lastName',event.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value = {formPesan.email} placeholder='Email Address' onChange={(event)=>onFormUpdate('email',event.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value = {formPesan.phone} placeholder='Phone Number' onChange={(event)=>onFormUpdate('phone',event.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formPesan.message} placeholder="Message" onChange={(event)=>onFormUpdate('message',event.target.value)}></textarea>
                                    <button type="submit"> <span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}

                                        </p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}