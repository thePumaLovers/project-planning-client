import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

const TeamPage = () => {
  return (
    <div>
      <h2>Meet thePumaLovers</h2>
      <p>Description of how we chose our name</p>

      <Container>
         <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>Juan Andres Gutierrez</Card.Title>
            <Card.Text>
            Hi! I’m Juan Andres, I am originally from Costa Rica. As a Software Engineer I look strive to use my talent, knowledge and experience to create positive impact in the world so I collaborated with other Super Talented Engineers and decided to create an App that makes you life easier and more organized. Things that I enjoy the most is spending time with my wifey. Train my Pups, a Fancy Dinner, a Crisp Cold Coke, Marvel Movies, I can’t forget Coffee and nice Lazy Sunday of just doing nothing but to exist.
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>

        <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  );
};

export default TeamPage;
