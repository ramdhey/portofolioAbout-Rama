

import { Container, Row, Col,Nav ,Tab} from "react-bootstrap"
import { ProjectCard } from '../ProjectCard/ProjectCards';



// import projImage from './image/ini.jpg'

//Ngepet Run
import ngepetrunhome from './image/home.jpeg'
import ngepetrunplay from './image/satu.jpeg'
import ngepetrunobs from './image/dua.jpeg'
import ngepetrunobs2 from './image/tiga.jpeg'
import modemanusia from './image/manusia.jpeg'
import modemanusia2 from './image/manusia2.jpeg'


//GPS NEWS
import gps from './image/berita.png'
import gps2 from './image/berita2.png'
import gps3 from './image/beritasearch.png'


//CRUD Todo List
import crud from './image/crud.png'
import crud2 from './image/crud2.png'
import crud3 from './image/edit.png'
import crud4 from './image/edit2.png'


import colorsharp from './image/color-sharp2.png'




export const Projects = () => {
    const tabone =[
        {
            title : "Home Page",
            description : "Home page of the game Ngepet Run ",
            imgUrl : ngepetrunhome,

        },
        {
            title : "Game Play While in Piggy Mode",
            description : "When the game starts, the player will default to using pig mode",
            imgUrl :  ngepetrunplay,

        },
        {
            title : "Game Play While in Piggy Mode",
            description : "When playing using the Piggy mode, players can hit a ghost obstacle in the form of a genduruwo ghost , pocong and a Kuntilanak.",
            imgUrl : ngepetrunobs,

        },
        {
            title : "Game Play While in Piggy Mode",
            description : "When the player plays using the piggy mode and meets citizens or humans on the track, the player will die, therefore the player must change to human mode when meeting another human",
            imgUrl :  ngepetrunobs2,

        },
        {
            title : "Game Play While in Human Mode",
            description : "When it becomes human mode, and the player hits a ghost obstacle, the player will die",
            imgUrl :  modemanusia,

        },
        {
            title : "Game Play While in Human Mode",
            description : "If in piggy mode we collect coins and will die if we meet other humans, in human mode players will be safe if they meet other citizens or humans and in human mode players can collect candles to turn back into piggy mode",
            imgUrl :  modemanusia2,

        },


    ];


    const tabtwo =[
        {
            title : "GPS News website page",
            description : "A website that displays news with headline news as default",
            imgUrl : gps,

        },
        {
            title : "GPS News website page",
            description : "There are various news categories on the GPS News website page",
            imgUrl : gps2,

        },
        {
            title : "GPS News website page",
            description : "In the search form, you can search for news by writing keywords or sentences related to the news.",
            imgUrl : gps3,

        },
        


    ];


    const tabthree =[
        {
            title : "To do List CRUD website page",
            description : "The home page of the website to enter data",
            imgUrl : crud,

        },
        {
            title : "To do List CRUD website page",
            description : "The results of the data that has been input, can be edited and also deleted",
            imgUrl :  crud2,

        },
        {
            title :"To do List CRUD website page",
            description : "If it's edited then after it's finished click the update button so that the edited data can be update",
            imgUrl : crud3,

        },
        {
            title : "To do List CRUD website page",
            description : "Display if it has been updated, and if you want to delete it, you can click the delete button",
            imgUrl :  crud4,

        },
        


    ];
    
    return(



        <section className='project' id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className="mb-5">My Projects</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

                        <Tab.Container id="projects-tabs" defaultActiveKey="satu">

                        <Nav variant="pills"className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="satu"> Ngepet Run Game Project </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="dua">  GPS News Webiste  </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tiga" > To do List CRUD Website</Nav.Link>
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