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
            <Card.Title>Aidyn Hillyard</Card.Title>
            <Card.Text>
            Hi, I'm Aidyn (zie/hir/hirs), an empathetic, full-stack software engineer with a passion for accessibility through creative, user-driven design. As a diversity and inclusion expert, I bring an equity lens strongly grounded in a deep awareness of the current social and technological landscape. My love of learning led me to collaborate with our team to create this project planning app: a way to take that first step in reaching your project goals!
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
            <Card.Title>Matt Powell</Card.Title>
            <Card.Text>
            I’m a full-stack engineer with a background in sound design and music. Throughout my career, I’ve found that project management apps can be clunky and have a steep learning curve, so why not create one that isn’t that! Hopefully this little app helps you clear your head a bit and maybe be inspired by other users’ project ideas.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>Ross Carnegie</Card.Title>
            <Card.Text>
            Hi I’m Ross. I’m a software engineer with an interest in empowering people. Software isn’t just about lines of code on a computer it’s about how those lines of code shape the world around it. l I really love the moment where you take this dream or idea, you look at what you need, how much it costs, the materials involved and say: I can do this. Its manageable. It’s possible. It’s that awesome moment where a dream becomes a plan. I hope our app helps you get there.
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  );
};

export default TeamPage;
