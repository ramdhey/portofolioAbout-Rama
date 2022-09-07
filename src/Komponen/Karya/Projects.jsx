

import { Container, Row, Col,Nav ,Tab} from "react-bootstrap"



import projImage from './image/ini.jpg'
import colorsharp from './image/color-sharp2.png'
import { ProjectCard } from '../ProjectCard/ProjectCards';



export const Projects = () => {
    const tabone =[
        {
            title : "Coba Satu",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Dua",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Tiga",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Empat",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Lima",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Enam",
            description : "Test",
            imgUrl :  projImage,

        },


    ];


    const tabtwo =[
        {
            title : "Coba Satu",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Dua",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Tiga",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Empat",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Lima",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Enam",
            description : "Test",
            imgUrl :  projImage,

        },


    ];


    const tabthree =[
        {
            title : "Coba Satu",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Dua",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Tiga",
            description : "Test",
            imgUrl : projImage,

        },
        {
            title : "Coba Empat",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Lima",
            description : "Test",
            imgUrl :  projImage,

        },
        {
            title : "Coba Enam",
            description : "Test",
            imgUrl :  projImage,

        },


    ];
    
    return(



        <section className='project' id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>My Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="satu">

                        <Nav variant="pills"className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="satu"> Satu </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="dua"> Dua </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tiga" > Tiga </Nav.Link>
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