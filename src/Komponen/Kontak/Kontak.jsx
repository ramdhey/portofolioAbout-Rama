// import React,{useState} from "react"
import { Container } from 'react-bootstrap'
import { Col,Row } from 'react-bootstrap'
// import emailjs from 'emailjs-com'

import 'animate.css';
import TrackVisibility from 'react-on-screen';


// import gambarkontak from './image/contact-img.svg'
import gambarkontakcoba from './image/clear.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




export const Kontak = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_6765ak6', 
        'template_td9yc55', 
        form.current, 
        '3-NW_G-nG9ryXsFNj')
      .then((result) => {
          console.log(result.text);
          console.log("Terkirim")
      }, (error) => {
          console.log(error.text);
      });
  };

    // const [firstName,setFirstname]= useState("")
    // const [lastName,setLastname]= useState("")
    // const [email,setEmail]= useState("")
    // const [message,setMessage]= useState("")

    // const submitHandler=()=>{
    //     console.log(firstName + lastName + email + message);

    //         const emailContent = {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email:email,
    //             message: message,
    //         }

    //             emailjs.send('service_d7ghzur', 'template_ayaj58d', emailContent, 'IPrgB3UPQ0PyWxcch')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    
    // }



    // const sendEmail = (event) => {
    //     event.preventDefault();
    //     emailjs.sendForm('service_clw6v6b','template_v74z18n', event.target,"user_Bqak0-6D3PD3qX0bg").then(res=>{
    //         console.log(res)
    //     }).catch(err=>console.log(err))
    // }
    // const formPesan = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }


    // const [formUntukPesan,setformUntukPesan] = useState(formPesan)
    // const [buttonText,setButtonText] = useState('Send')
    // const [status,setStatus] = useState({})

    // const onFormUpdate = (category,value) => {
    //     setformUntukPesan({
    //         ...formUntukPesan,[category]:value
    //     })
    // }


    // const handleSubmit =async (event) => {
    //     event.preventDefault();
    //     setButtonText("Sending...")
    //     let response = await fetch("http://localhost:3000/contact",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type":"application/json;charset=utf-8",
    //         },
    //         body:JSON.stringify(formUntukPesan),
    //     });
    //     setButtonText("Send");
    //     let result = response.json();
    //     setformUntukPesan(formPesan);
    //     if(result.code === 200){
    //         setStatus({ success: true,message: 'Message sent successfully'});
    //     }else{
    //         setStatus({success: false,message: 'Please Try Again , Something went wrong'})
    //     }

    // };

    return(
        <section className="kontak" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={gambarkontakcoba} alt='kontak' />
                               
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <h2>Please, write here if there is a message for me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} >
                                        
                                    <input type="text" placeholder="First Name" name="first_name" />
                                    
                                </Col>
                                <Col sm={6} >
                                        
                                    <input type="text" placeholder="Last Name" name="last_name" />
                                    
                                </Col>
                                <Col sm={6} >
                                        
                                    <input type="email" placeholder='Email Address' name="user_email" />
                                    <textarea row="6" placeholder="Message" name="message" />

                                    
                                    
                                </Col>
                                <Col sm={6} >
                                
                                
                                    
                                    
                                </Col>
                                <Col sm={6} >
                                <button type="submit" value="Send" name="send" className="text-white send" >Send</button>
                                
                                    
                                    
                                </Col>
                                

                            </Row>
                            
                            
                            
                            {/* <input type="submit" value="Send" /> */}
                        </form>
                    </Col>
                </Row>
            

            </Container>
            
            {/* <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={gambarkontakcoba} alt='kontak' />
                               
                            }
                        </TrackVisibility>
                        
                    </Col>
                    <Col md={6}>
                        <h2>Please, write here if there is a message for me</h2>
                        <form >
                            <Row>
                                <Col sm={6} className="px-1">
                                    
                                    <input type="text"  tabIndex="1" required  placeholder="First Name" onChange={(event)=>{setFirstname(event.target.value)}}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text"  tabIndex="2" required  placeholder='Last Name' onChange={(event)=>{setLastname(event.target.value)}} ></input>
                                </Col>
                                
                                <Col sm={6} className="px-1">
                                    <input type="email"   tabIndex="3" required  placeholder='Email Address' onChange={(event)=>{setEmail(event.target.value)}} ></input>
                                </Col>
                                
                                <Col>
                                    <textarea row="6"   tabIndex="4" required placeholder="Message" onChange={(event)=>{setMessage(event.target.value)}} ></textarea>
                                    
                                    <button type="submit" name="send" className="send" onClick={submitHandler}>Send</button>
                                </Col>
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container> */}

        </section>
    )
}