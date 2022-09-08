import React,{useState} from "react"
import { Container } from 'react-bootstrap'
import { Col,Row } from 'react-bootstrap'

import gambarkontak from './image/contact-img.svg'



export const Kontak = () => {
    const formPesan = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }


    const [formUntukPesan,setformUntukPesan] = useState(formPesan)
    const [buttonText,setButtonText] = useState('Send')
    const [status,setStatus] = useState({})

    const onFormUpdate = (category,value) => {
        setformUntukPesan({
            ...formUntukPesan,[category]:value
        })
    }


    const handleSubmit =async (event) => {
        event.preventDefault();
        setButtonText("Sending...")
        let response = await fetch("http://localhost:3000/contact",{
            method: "POST",
            headers: {
                "Content-Type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(formUntukPesan),
        });
        setButtonText("Send");
        let result = response.json();
        setformUntukPesan(formPesan);
        if(result.code === 200){
            setStatus({ success: true,message: 'Message sent successfully'});
        }else{
            setStatus({success: false,message: 'Please Try Again , Something went wrong'})
        }

    };

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
                                    
                                    <input type="text" value = {formUntukPesan.firstName} placeholder="First Name" onChange={(event)=>onFormUpdate('firstName',event.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value = {formUntukPesan.lastName} placeholder='Last Name' onChange={(event)=>onFormUpdate('lastName',event.target.value)}></input>
                                </Col>
                                
                                <Col sm={6} className="px-1">
                                    <input type="email" value = {formUntukPesan.email} placeholder='Email Address' onChange={(event)=>onFormUpdate('email',event.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value = {formUntukPesan.phone} placeholder='Phone Number' onChange={(event)=>onFormUpdate('phone',event.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formUntukPesan.message} placeholder="Message" onChange={(event)=>onFormUpdate('message',event.target.value)}></textarea>
                                    <button type="submit" className="send"> <span>{buttonText}</span></button>
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