import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f5f5f5;

  @media (max-width: 540px) {
    margin: 0 1.5rem 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    margin: 0 1rem;
  }

  p {
    font-style: italic;
    letter-spacing: 0.2rem;
    color: ${({ color }) => (color ? color : "#f797aa")};
    text-shadow: 2px 1px 2px gray;
    padding: 0.5rem;
    text-align: center;

    @media (min-width: 426px) {
      font-size: 3.5rem;
    }

    @media (max-width: 425px) {
      font-size: 2.5rem;
    }

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }
`;
