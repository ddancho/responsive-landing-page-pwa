import styled, { css } from "styled-components";
import images from "../../assets/images";

export const ContainerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  background-image: url(${images.galleryBg});
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: #f5f5f5;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const Slider = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  margin: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 8px;

  @media (max-width: 425px) {
    width: 290px;
  }
`;

export const Img = styled.img`
  width: 98%;
  height: 98%;
  object-fit: cover;
`;

const Arrow = css`
  position: absolute;
  top: 214px;
  color: white;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 372px;
    width: 50px;
    background-color: black;
    opacity: 0;
    border: 1px solid black;
  }

  div:hover {
    opacity: 0.6;
  }
`;

const ArrowSmallDevice = css`
  @media (max-width: 425px) {
    top: 284px;

    div {
      height: 232px;
      width: 30px;
    }
  }
`;

export const ArrowLeft = styled.div`
  ${Arrow}
  left: 10%;

  div:hover {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  ${ArrowSmallDevice}
`;

export const ArrowRight = styled.div`
  ${Arrow}
  right: 10%;

  div:hover {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  ${ArrowSmallDevice}
`;
