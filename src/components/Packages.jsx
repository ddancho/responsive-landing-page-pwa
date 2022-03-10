import {
  Container,
  Wrapper,
  Card,
  PackageTitle,
  PackagePrice,
  Line,
  PackageCake,
} from "./styled/Packages.styled";
import { Title } from "./styled/Title.styled";

function Packages() {
  return (
    <Container>
      <Title top={40}>
        <p>Packages For Order</p>
      </Title>
      <Wrapper>
        <Card bg={`#f7f6cb`}>
          <PackageTitle color={`#92438e`}>Small Size Package</PackageTitle>
          <PackagePrice>30€</PackagePrice>
          <Line />
          <PackageCake>Cake 1</PackageCake>
          <Line />
          <PackageCake>Cake 2</PackageCake>
        </Card>
        <Card bg={`#e4f7cb`}>
          <PackageTitle color={`#8f2548`}>Medium Size Package</PackageTitle>
          <PackagePrice>50€</PackagePrice>
          <Line />
          <PackageCake>Cake 1</PackageCake>
          <Line />
          <PackageCake>Cake 2</PackageCake>
          <Line />
          <PackageCake>Cake 3</PackageCake>
        </Card>
        <Card bg={`#f7e6cb`}>
          <PackageTitle color={`#5c2459`}>Large Size Package</PackageTitle>
          <PackagePrice>70€</PackagePrice>
          <Line />
          <PackageCake>Cake 1</PackageCake>
          <Line />
          <PackageCake>Cake 2</PackageCake>
          <Line />
          <PackageCake>Cake 3</PackageCake>
          <Line />
          <PackageCake>Cake 4</PackageCake>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Packages;
