import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "@fontsource/playfair-display";
import { FaUserCircle , FaShoppingCart } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { useNavigate } from "react-router-dom";
import  { useState, Fragment } from "react";

const Container = styled.div`
  height: 60px;
  background-color:rgb(4, 5, 58);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  

  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const SearchContainer = styled.div`
  border: 0.5px solid ;
  background-color:rgb(4, 5, 58);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  ${'' /* flex: 1; */}
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: normal;
  font-family: "Playfair Display";
    color: white;
  font-size: 25px;
  ${mobile({ fontSize: "25px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color : #FFEEEE;
  a:link{
    text-decoration:none;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const [keyword, setKeyword] = useState("");
const navigate = useNavigate();

const searchSubmitHandler = (e) => {
  e.preventDefault();
  if (keyword.trim()) {
    navigate(`/products/${keyword}`);
  } else {
    navigate("/products");
  }
};
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>GALLERIA</Logo>
        </Left>
        <Center>
          <a href="/"><MenuItem>HOME</MenuItem></a>
          </Center>
         <Center>
          <a href="/products"><MenuItem>PRODUCTS</MenuItem></a>
          </Center>
        <Center>
        <a href="/login"><MenuItem>LOGIN</MenuItem></a>
        </Center>
        {/* <Center>
          <a href="/"><MenuItem>ABOUT US</MenuItem></a>
          </Center> */}
        <Right>
        
         <SearchContainer>
            {/* <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} /> */}
            <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search a Product ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input className="submit" type="submit" value="Search" />
          </form>
          </SearchContainer>
      
         <a href="/Cart"><MenuItem><Badge badgeContent={0} color="primary">
              <FaShoppingCart/>
            </Badge></MenuItem></a>
            <a href="/account"><MenuItem><Badge color="primary">
            <FaUserCircle/>
            </Badge></MenuItem></a>
            
            
         </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;