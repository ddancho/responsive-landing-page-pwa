import { Container, Card, HoursInfo, ContactInfo } from "./styled/Contact.styled";

function Contact() {
  return (
    <Container>
      <Card>
        <h2>Working Hours</h2>
        <HoursInfo>
          Monday - Friday:
          <p>08:00 - 20:00</p>
        </HoursInfo>
        <HoursInfo>
          Saturday - Sunday:
          <p>09:00 - 14:00</p>
        </HoursInfo>
      </Card>
      <Card>
        <h2>Contact Us</h2>
        <ContactInfo>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita, excepturi velit
          </h3>
          <p>+999 1234567890</p>
          <p>+999 0987654321</p>
          <p>lorem.ipsum@example.com</p>
        </ContactInfo>
      </Card>
    </Container>
  );
}

export default Contact;
