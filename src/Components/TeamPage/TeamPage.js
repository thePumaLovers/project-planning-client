import './TeamPage.css'
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import aidynavatar from '../../images/aidynavatar.png'
import juanavatar from '../../images/juanavatar.png'
import rossavatar from '../../images/rossavatar.png'
import mattavatar from '../../images/mattavatar.png'


const TeamPage = () => {
  return (
    <Container>
      <h2 className="team-title">Meet thePumaLovers</h2>
      <p className="team-explanation">Our team found its name through a robust discussion of risk management: when coming face-to-face with a bear, what is the best survival strategy? Through our exploration of that topic, we found a shared appreciation for wildlife and landed on our team name: thePumaLovers.</p>
      <Container>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="acc-header">
            <img src={rossavatar} />
              Ross Carnegie (he/him/his)</Accordion.Header>
            <Accordion.Body>Hi I’m Ross. I’m a software engineer with an interest in empowering people. Software isn’t just about lines of code on a computer it’s about how those lines of code shape the world around it. l I really love the moment where you take this dream or idea, you look at what you need, how much it costs, the materials involved and say: I can do this. Its manageable. It’s possible. It’s that awesome moment where a dream becomes a plan. I hope our app helps you get there.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="acc-header">
            <img src={mattavatar} />
              Matt Powell (he/him/his)</Accordion.Header>
            <Accordion.Body>I’m a full-stack engineer with a background in sound design and music. Throughout my career, I’ve found that project management apps can be clunky and have a steep learning curve, so why not create one that isn’t that! Hopefully this little app helps you clear your head a bit and maybe be inspired by other users’ project ideas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="acc-header">
            <img src={juanavatar} />
              Juan Andres Gutierrez (he/him/his)</Accordion.Header>
            <Accordion.Body>Hi! I’m Juan Andres, I am originally from Costa Rica. As a Software Engineer I look strive to use my talent, knowledge and experience to create positive impact in the world so I collaborated with other Super Talented Engineers and decided to create an App that makes you life easier and more organized. Things that I enjoy the most is spending time with my wifey. Train my Pups, a Fancy Dinner, a Crisp Cold Coke, Marvel Movies, I can’t forget Coffee and nice Lazy Sunday of just doing nothing but to exist.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="acc-header">
              <img src={aidynavatar} />
            Aidyn Hillyard (zie/hir/hirs)</Accordion.Header>
            <Accordion.Body>Hi, I'm Aidyn, an empathetic, full-stack software engineer with a passion for accessibility through creative, user-driven design. My love of learning led me to collaborate with our team to create this project planning app. Sometimes it's tough to turn ideas into reality, but we hope our app will provide a way for you to take that first step in reaching your project goals!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export default TeamPage;
