import styled from "styled-components";
import images from "../../assets/images";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url(${images.popularBg});
  background-position: center;
  background-size: 5%;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* width: 70%; */
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin: 9rem 0;

  @media (max-width: 1280px) {
    width: 80%;
  }

  @media (max-width: 920px) {
    width: 80%;
  }

  @media (max-width: 820px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 70%;
  }

  @media (min-width: 1400px) {
    width: 60%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin-bottom: 0.5rem;

  @media (min-width: 1400px) {
    padding: 0.5rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
