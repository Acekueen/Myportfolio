import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/CoderDojo.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                alt="Coder Dojo Speaker"
                className="img-fluid"
                style={{ borderRadius: "2%" }}
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple">MISSION</span> 
            </h1>
            <p className="home-about-body">
            Hi! I'm  <span className="purple">Vedusha Chooramun,</span> 

             a dedicated advocate for diversity, innovation, and career transformation in the tech industry.
             <br/><br/>
             <span className="purple">A Software Engineer </span> at heart, I am driven by a passion for <span className="purple">leadership</span> and a 
             desire to make a <span className="purple">positive impact on the world </span>. I strive for <span className="purple">delivery excellence </span>,
            ensuring that every project meets the highest standards. 
            <br/><br/>
            Through <span className="purple">mentoring and coaching</span>, I aim to <span className="purple">help individuals</span> discover and utilize their full potential, 
            fostering a culture of <span className="purple"> continuous improvement and empowerment </span>
            </p>
            <br/><br/>
          </Col>  
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
