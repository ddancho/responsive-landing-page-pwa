import styled, { css } from "styled-components";
import images from "../../assets/images";

const FontStyle = css`
  color: black;
  font-size: 22px;
  font-weight: 400;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 1rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;

    @media (max-width: 540px) {
      width: 60px;
    }
  }
`;

export const List = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;

  ${({ small }) =>
    !small &&
    `
    @media (min-width:541px) {
    display: flex;
  }
  `}

  ${({ small }) =>
    small &&
    `
    @media (max-width:540px) {
    display: flex;
    flex-direction: column;
  }
  `}
`;

export const Item = styled.li`
  ${FontStyle}
  margin: 0 1.5rem;
  cursor: pointer;

  a:hover {
    color: darkgray;
  }

  @media (max-width: 820px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    margin: 2rem 0;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FontStyle}

  a {
    margin: 0 1rem;
  }

  a:hover {
    color: darkgray;
  }

  div {
    width: 1px;
    height: 30px;
    background-color: black;
  }

  @media (max-width: 820px) {
    font-size: 14px;
  }
`;

export const NavSmallContainer = styled.div`
  display: none;
  position: relative;

  @media (max-width: 540px) {
    display: flex;
  }
`;

export const NavSmallOverlay = styled.div`
  display: none;

  @media (max-width: 540px) {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${images.navSmallBg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 999;

    svg {
      position: absolute;
      top: 22px;
      right: 20px;
    }

    li {
      border: 1px solid black;
      border-radius: 8px;
      padding: 0.5rem;
      background-color: #f0f0f0;
    }
  }
`;
