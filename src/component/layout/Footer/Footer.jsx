import {
 
    MailOutline,
    Phone,
    Room,
  
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "./responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
     background-color:rgb(4, 5, 58);
     font-size:14px;
  
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color:#F7F7F7;
  `;
  
  const Logo = styled.h1`
  color:#F7F7F7;
  
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    color:#F7F7F7;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    color:white;
    text-decoration:none;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 10px;
    margin-left: 25px;
    color:#F7F7F7;
  `;
  const Mottoelements = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    margin-top: 10px;
    ${mobile({ display: "none" })}
  `;

  

  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
    color:#F7F7F7;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>GALLERIA</Logo>
          <Desc>
        Providing feasibility to customer for purchasing different items on best price. Shop online at Galleria from the comfort of your home.
          </Desc>
  
          <SocialContainer>
  
          <a href="https://forms.gle/zYhnGjJinnftA25X6">Need Help?</a>
          
          </SocialContainer>
  
        </Left>
        
        <Center>
        <Title> MOTTO </Title>
        <Mottoelements>
        <ul>
            <li>ETHICAL</li>
            <li>SUSTAINABLE</li>
            <li>FAIR TRADE</li>
          </ul>
          <p>High Quality is our first priority</p>
        </Mottoelements>
          
        </Center>
        <Right>
          <Title>CONTACTS</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/>Banasthali Vidyapith, Jaipur.
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/>6892352234
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> galleria139@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;


// import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
// import "./Footer.css"

// const Footer = () => {
//     return (
//         <footer id="footer">
//             <div className="leftFooter">
//                 <h4>DOWNLOAD OUR APP</h4>
//                 <p>Download App for Android and IOS mobile phone</p>
//                 <img src={playStore} alt="playstore" />
//                 <img src={appStore} alt="Appstore" />
//             </div>

//             <div className="midFooter">
//                 <h1>GALLERIA</h1>
//                 <h3>Ethical, Sustainable, Fair Trade</h3>
//                 <p>High Quality is our first priority</p>

//                 <p>Copyrights 2022 &copy; None</p>
//             </div>

//             <div class="rightFooter">
//                 <h4>Follow Us</h4>
//                 <a href="http://instagram.com/meabhisingh">Instagram</a>
//                 <a href="http://instagram.com/meabhisingh">Youtube</a>
//                 <a href="http://instagram.com/meabhisingh">Facebook</a>
//             </div>
//         </footer>
//     );
// };

// export default Footer