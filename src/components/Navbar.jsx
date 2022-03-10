import { Nav, Logo, List, Item, Login, NavSmallContainer, NavSmallOverlay } from "./styled/Navbar.styled";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useState } from "react";
import images from "../assets/images";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src={images.logo} alt='logo' />
      </Logo>
      <List>
        <Item>
          <a href='#home'>Home</a>
        </Item>
        <Item>
          <a href='#cakes'>Cakes</a>
        </Item>
        <Item>
          <a href='#orders'>Orders</a>
        </Item>
        <Item>
          <a href='#about'>About Us</a>
        </Item>
        <Item>
          <a href='#contact'>Contact</a>
        </Item>
      </List>
      <Login>
        <a href='#login'>Sign In</a>
        <div />
        <a href='#register'>Sign Up</a>
      </Login>
      <NavSmallContainer>
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <NavSmallOverlay>
            <GiCancel fontSize={27} onClick={() => setToggleMenu(false)} />
            <List small>
              <Item>
                <a href='#home'>Home</a>
              </Item>
              <Item>
                <a href='#cakes'>Cakes</a>
              </Item>
              <Item>
                <a href='#orders'>Orders</a>
              </Item>
              <Item>
                <a href='#about'>About Us</a>
              </Item>
              <Item>
                <a href='#contact'>Contact</a>
              </Item>
            </List>
          </NavSmallOverlay>
        )}
      </NavSmallContainer>
    </Nav>
  );
}

export default Navbar;
