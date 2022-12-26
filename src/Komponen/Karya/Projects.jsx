

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




//temanKumpul
import tk1 from './image/Web-TemanKumpul/Login.png'
import tk2 from "./image/Web-TemanKumpul/Regis1.png";
import tk3 from "./image/Web-TemanKumpul/Regis2.png"
import tk4 from "./image/Web-TemanKumpul/Dashboard.png"
import tk5 from "./image/Web-TemanKumpul/Dashboard Dark.png";
import tk6 from "./image/Web-TemanKumpul/mempost.png";
import tk7 from "./image/Web-TemanKumpul/myPost.png";
import tk8 from "./image/Web-TemanKumpul/Posts.png";
import tk9 from "./image/Web-TemanKumpul/ProfilTeman.png";
import tk10 from "./image/Web-TemanKumpul/isMobile.png";
import tk11 from "./image/Web-TemanKumpul/isMobile2.png";
import tk12 from "./image/Web-TemanKumpul/isMobile3.png";

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


    const tabthree = [
      {
        title: "temanKumpul-Social Media Website",
        description:
          "The default display will be set to go directly to the login page, so that users who already have an account can immediately enter their account",
        imgUrl: tk1,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Registration page to do for users who don't have an account, if you can already access it by moving to the login page",
        imgUrl: tk2,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Registration page to do for users who don't have an account, if you can already access it by moving to the login page",
        imgUrl: tk3,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "If the login is successful it will immediately go to your dashboard page, at the top there is a navbar in which there are dark and light mode features to set the display theme for each page, and at the bottom there is a column to post something, and see a list of existing posts",
        imgUrl: tk4,
      },
      {
        title: "temanKumpul-Social Media Website",
        description: "Dashboard display when you use dark mode",
        imgUrl: tk5,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Post column to add moment posts that you have in the form of files, images or text",
        imgUrl: tk6,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "If you have shared your moments through posts, the posts will appear like this",
        imgUrl: tk7,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "The post display will later be made in the form of a list to make it easier for users to see it and give likes to each existing post",
        imgUrl: tk8,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Display if it has been updated, and if you want to delete it, you can click the delete button",
        imgUrl: tk9,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Because my website has a responsive screen size, so if it's used on a cellphone screen it will adjust automatically",
        imgUrl: tk10,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Because my website has a responsive screen size, so if it's used on a cellphone screen it will adjust automatically",
        imgUrl: tk11,
      },
      {
        title: "temanKumpul-Social Media Website",
        description:
          "Because my website has a responsive screen size, so if it's used on a cellphone screen it will adjust automatically",
        imgUrl: tk12,
      },
    ];
    
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <h2 className="mb-5">My Projects</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

              <Tab.Container id="projects-tabs" defaultActiveKey="satuc">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="satuc">
                      {" "}
                      Ngepet Run Game Project{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="duac"> Web BrotherStore </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="tigac">
                      {" "}
                      temanKumpul Web{" "}
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="tiga"> Web BrotherStore </Nav.Link>
                  </Nav.Item> */}
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="satuc">
                    <Row>
                      {tabone.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="duac">
                    <Row>
                      {tabtwo.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tigac">
                    <Row>
                      {tabthree.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>

        <img
          className="background-image-right"
          src={colorsharp}
          alt="rightbcg"
        ></img>
      </section>
    );
}