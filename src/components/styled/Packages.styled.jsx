import styled from "styled-components";
import images from "../../assets/images";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url(${images.packagesBg});
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 0.5rem;
  margin: 12rem 0;

  @media (max-width: 920px) {
    width: 90%;
    margin-bottom: 35rem;
  }

  @media (max-width: 820px) {
    margin-bottom: 20rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 12rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 14rem;
    margin-bottom: 6rem;
    width: 75%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 350px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 0.5rem;
  background-color: ${({ bg }) => bg};

  @media (max-width: 425px) {
    width: 240px;
  }
`;

export const PackageTitle = styled.span`
  color: ${({ color }) => color};
  font-size: 1.75rem;
  font-style: italic;
  letter-spacing: 0.05rem;
  margin-top: 0.5rem;

  @media (max-width: 920px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const PackagePrice = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
  color: red;
`;

export const Line = styled.div`
  height: 2px;
  width: 200px;
  background-color: black;
  margin-top: 0.5rem;
`;

export const PackageCake = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  margin: 1rem 0;
`;
