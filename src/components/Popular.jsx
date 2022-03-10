import { Container, Wrapper, Card, Img } from "./styled/Popular.styled";
import { Title } from "./styled/Title.styled";
import images from "../assets/images";

function Popular() {
  return (
    <Container>
      <Title top={20}>
        <p>Popular Cakes</p>
      </Title>
      <Wrapper>
        {images.popular.map((image, index) => (
          <Card key={index}>
            <Img src={image} alt='popular' />
            <h2>Cake</h2>
            <p>20€</p>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Popular;
