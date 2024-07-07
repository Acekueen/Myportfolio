import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          
            Hi there, I am <span className="purple">Vedusha </span> and welcome to my world...
            <br/><br/>
            <span className="purple"><b>From Passion to Purpose: My Journey in Software Engineering</b></span> 
            <br/>
            <br/>
              I am a dedicated advocate for diversity, innovation, and career transformation in the tech industry. 
              Originally from Mauritius, I have made Perth, Australia, my home for over a decade now.
            <br/>
            <br/>
            <span className="purple"><b><i>Discovering my passion</i></b></span>
            <br/>
            <br/> 
              My journey in software engineering began at the age of 11. Back then, 
              CRT computers were a luxury, and my Pentium 4 with no internet was my gateway to the digital world. MS Paint was my playground, where I spent countless hours. It was this simple program that sparked my curiosity and fascination with technology. I was puzzled and intrigued by how, without physically touching the screen, I could create and manipulate images on the other end. This magical experience led me to dive deeper into the world of software engineering.
            <br/>
            <br/>
            <span className="purple"><b><i>Pursuing Excellence</i></b></span>
            <br/>
            <br/>
              As a Software Engineer at heart, I was driven by a passion for leadership and a 
              desire to make a positive impact on the world. I now hold a leadership role, which 
              allows me to drive more efficient changes from this position. 
              I strive for delivery excellence in every project, ensuring the highest standards are met. 
              Mentoring others is a significant part of my journey. 
              I aim to help individuals discover and utilize their full potential, fostering a culture of continuous improvement and empowerment.
            <br/>
            <br/>
            <span className="purple"><b><i>Community Involvement</i></b></span>
            <br/>
            <br/>
              Giving back to the community is something I hold dear. I am a community lifer for DDD Perth 
              and have co-organized meet-ups like the Female Coder's Collective, which brings women who 
              code together. These experiences have allowed me to contribute to the tech community and 
              support others in their professional growth.
            <br/>
            <br/>
              <span className="purple"><b><i>Personal Interests</i></b></span>
            <br/>
            <br/>
              Outside of my professional life, I have a few passions that keep me balanced. 
              I love going to the gym, reading books, gardening and staying active. 
              Additionally, building Legos keeps my brain stimulated and sparks my creativity.
              These activities help me recharge and stay focused on my goals.
            <br/>
            <br/>
            <hr/>

              My journey in software engineering has been driven by curiosity, passion, and a commitment to making a positive impact. From discovering my love for technology at a young age to mentoring others and giving back to the community, I am dedicated to fostering innovation and growth in the tech industry.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
