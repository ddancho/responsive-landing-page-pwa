import styled from "styled-components";
import images from "../../assets/images";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url(${images.wrapperBg});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;

  @media (max-width: 920px) {
    margin-bottom: 30rem;
    background-size: contain;
  }

  @media (max-width: 820px) {
    margin-bottom: 16rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 8rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: none;
    background-color: #f5f5f5;
    margin-bottom: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 500px;
  padding: 7rem 8rem 0 7rem;

  h2 {
    font-style: italic;
    font-weight: 400;
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    width: 350px;
    height: 280px;
    padding: 1rem;
  }
`;

export const HoursInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem 0;
  color: #7a713f;
  font-weight: 500;

  p {
    color: gray;
    padding: 0.2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-weight: 300;
    padding: 1rem 0;
  }

  p {
    padding: 0.15rem 0;
  }
`;
