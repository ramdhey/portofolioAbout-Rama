

import { Container, Row, Col,Nav ,Tab} from "react-bootstrap"
import { ProjectCard } from '../ProjectCard/ProjectCards';



// import projImage from './image/ini.jpg'

import sertif1 from './image/0.png'
import sertif2 from './image/00.png'
import sertif3 from './image/1.png'
import sertif4 from './image/2.png'
import sertif5 from './image/3.png'
import sertif6 from './image/4.png'
import sertif7 from './image/5.png'
import sertif8 from './image/6.png'
import sertif9 from './image/8.png'




import colorsharp from './image/color-sharp2.png'




export const Certificatenya = () => {
    const tabone =[
        {
            title : "Internship certificate",
            description : "Certificate for participating in an internship for 5 months at PT HashMicro Solusi Indonesia as an Odoo ERP Software Programmer using the Python programming language",
            imgUrl : sertif1,

        },
        {
            title : "Python programming language certification",
            description : "Python programming language certification on progate",
            imgUrl :  sertif2,

        },
        {
            title : "Startup creation certificate",
            description : "Startup creation for students is organized by AIESEC at the University Negeri Jakarta ",
            imgUrl : sertif3,

        },
        


    ];


    const tabtwo =[
        {
            title : "Storage and database certificates on AWS",
            description : "AWS X Dicoding certificates in AWS storage and database usage",
            imgUrl : sertif4,

        },
        {
            title : "Game development certification",
            description : "Game development certification at Agate using unity as the engine",
            imgUrl : sertif5,

        },
        {
            title : "Full Stack Programming certificate",
            description : "Full Stack Programming certificate, cloud and security for digital",
            imgUrl : sertif6,

        },
        


    ];


    const tabthree =[
        {
            title : "Jetson Nano certificate",
            description : "Implementation of jetson Nano developer kits on artificial intelligence and IoT",
            imgUrl : sertif7,

        },
        {
            title : "MERN webinar certificate",
            description : "Modern Software development with MERN",
            imgUrl :  sertif8,

        },
        {
            title :"CI/CD certificate",
            description : "CI/CD performance improvement certificate",
            imgUrl : sertif9,

        },
        
        


    ];
    
    return(



        <section className='project' id="certificate">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className="mb-5">My Certificate & Achievement</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

                        <Tab.Container id="projects-tabs" defaultActiveKey="satu">

                        <Nav variant="pills"className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="satu"> Page 1 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="dua">  Page 2  </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tiga" > Page 3</Nav.Link>
                            </Nav.Item>
                            

                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="satu">
                                <Row>
                                    {
                                        tabone.map((project, index)=>{
                                            return(
                                                <ProjectCard 
                                                key={index} 
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="dua">
                            <Row>
                                    {
                                        tabtwo.map((project, index)=>{
                                            return(
                                                <ProjectCard 
                                                key={index} 
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tiga">
                            <Row>
                                    {
                                        tabthree.map((project, index)=>{
                                            return(
                                                <ProjectCard 
                                                key={index} 
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>

                </Row>

            </Container>

            <img className='background-image-right' src={colorsharp} alt='rightbcg'></img>
            
        </section>
    )
}