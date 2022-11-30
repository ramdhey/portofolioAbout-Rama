

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


//BrotherStoreWeb
import satu from './image/webbro3.png'
import dua from './image/webbro2.png'
import tiga from './image/webbro10.png'
import pat from './image/webbro4.png'
import ma from './image/webbro5.png'
import nam from './image/webbro6.png'
import juh from './image/webbro7.png'
import pan from './image/webbro8.png'
import lan from './image/webbro9.png'
import las from './image/webbro11.png'


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
            title : "Web BrotherStore",
            description : "A website home page that displays the products being sold",
            imgUrl : satu,

        },
        {
            title : "Web BrotherStore",
            description : "A card that displays the products sold along with the rating, price and a button to add the product to your cart list",
            imgUrl : dua,

        },
        
        {
            title : "Web BrotherStore",
            description : "The shopping cart list on the cart page can display products that have been added to the cart, can also add, subtract or even delete products in the cart",
            imgUrl : pat,

        },
        {
            title : "Web BrotherStore",
            description : "When you proceed to Payment, you will enter the shipping page, where there are columns for the recipient's name, as well as the recipient's address",
            imgUrl : ma,

        },
        {
            title : "Web BrotherStore",
            description : "Payment method page contains payment method options",
            imgUrl : nam,

        },
        {
            title : "Web BrotherStore",
            description : "Order confirmation page, is a product order confirmation page, which contains product details, shipping address, payment method, as well as the product and quantity ordered",
            imgUrl : juh,

        },
        {
            title : "Web BrotherStore",
            description : "Order confirmation page, is a product order confirmation page, which contains product details, shipping address, payment method, as well as the product and quantity ordered",
            imgUrl : pan,

        },
        {
            title : "Web BrotherStore",
            description : "If it has been confirmed for the message, then a payment using paypal will appear",
            imgUrl : lan,

        },
        {
            title : "Web BrotherStore",
            description : "After that it will be redirected to the paypal page to confirm the paypal account for payment",
            imgUrl : tiga,

        },
      
        {
            title : "Web BrotherStore",
            description : "Then the payment will be immediately validated if the payment is successful",
            imgUrl : las,

        },
        


    ];


    // const tabthree =[
    //     {
    //         title : "To do List CRUD website page",
    //         description : "The home page of the website to enter data",
    //         imgUrl : crud,

    //     },
    //     {
    //         title : "To do List CRUD website page",
    //         description : "The results of the data that has been input, can be edited and also deleted",
    //         imgUrl :  crud2,

    //     },
    //     {
    //         title :"To do List CRUD website page",
    //         description : "If it's edited then after it's finished click the update button so that the edited data can be update",
    //         imgUrl : crud3,

    //     },
    //     {
    //         title : "To do List CRUD website page",
    //         description : "Display if it has been updated, and if you want to delete it, you can click the delete button",
    //         imgUrl :  crud4,

    //     },
        


    // ];
    
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
                                <Nav.Link eventKey="dua">  Web BrotherStore  </Nav.Link>
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
                            {/* <Tab.Pane eventKey="tiga">
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
                            </Tab.Pane> */}
                        </Tab.Content>
                        </Tab.Container>
                    </Col>

                </Row>

            </Container>

            <img className='background-image-right' src={colorsharp} alt='rightbcg'></img>
            
        </section>
    )
}