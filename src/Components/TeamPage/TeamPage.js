import "./TeamPage.css";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import aidynavatar from "../../images/aidynavatar.png";
import juanavatar from "../../images/juanavatar.png";
import mattavatar from "../../images/mattavatar.png";
import rossavatar from "../../images/rossavatar.png";
import pumalogo from "../../images/pumalogo.png";

const TeamPage = () => {
  return (
    <Container>
      <img className="puma-logo" src={pumalogo} alt="Logo of a puma" />
      <h2 className="team-title">Meet thePumaLovers</h2>
      <p className="team-explanation">
        Our team found its name through a robust discussion of risk management:
        when coming face-to-face with a bear, what is the best survival
        strategy? Through our exploration of that topic, we found a shared
        appreciation for wildlife and landed on our team name: thePumaLovers.
      </p>
      <Container>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="acc-header">
              <div className="acc-pic-name">
                <img
                  className="avatar"
                  src={rossavatar}
                  alt="Avatar of Ross, a brown-skinned person with dark brown hair, wearing a white shirt."
                />
                Ross Carnegie (he/him/his)
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Hi I’m Ross. I’m a software engineer with an interest in
                empowering people. I really love the moment where you take this
                dream or idea, you look at what you need, how much it costs, the
                materials involved and say: I can do this. It’s manageable. It’s
                possible. It’s that awesome moment where a dream becomes a plan.
                I hope our app helps you get there.
              </p>

              <p>
                We worked on a lot of this together. The idea for the app
                originated from my own experiences with projects. I worked on
                the project page and the video on the landing page. I also made
                a table from our colour palette to help everyone to meet
                accessibility guidelines.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="acc-header">
              <div className="acc-pic-name">
                <img
                  className="avatar"
                  src={mattavatar}
                  alt="Avatar of Matt, a light-skinned person with long auburn hair, wearing a green shirt."
                />
                Matt Powell (he/him/his)
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Hello! My name is Matt, and I'm a full-stack engineer with a
                background in sound design and music. Throughout my career, I’ve
                found that project management apps can be clunky and have a
                steep learning curve, so why not create one that isn’t that!
                Hopefully this little app helps you clear your head a bit and
                maybe be inspired by other users’ project ideas.
              </p>

              <p>
                During this process, I helped organize the structure of the
                front end app and spent a lot of time pondering form logic. I
                additionally improved the collaborative process by facilitating
                conversations and helping to bring us to a consensus on
                differing opinions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="acc-header">
              <div className="acc-pic-name">
                <img
                  className="avatar"
                  src={juanavatar}
                  alt="Avatar of Juan, a brown-skinned person with short brown hair, wearing a white shirt."
                />
                Juan Andres Gutierrez (he/him/his)
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Hi! I’m Juan Andres, and I am originally from Costa Rica. As a
                Software Engineer I strive to use my talents, knowledge and
                experience to create a positive impact in the world. I’m problem
                solved focus and I also use my tools and resources wisely. I
                collaborated with Aidyn, Matt and Ross to design and develop an
                App that makes your life more organized.
              </p>

              <p>
                I brought up the idea to use ‘’Var(--colorName: #HEXCODE)‘’ in
                our css files to assure consistency of the color palette. I also
                worked on the read, create, edit, and delete on the Projects
                page. During mob programming I helped my colleagues different
                ideas and made sure to spot mistakes or any inconsistency in the
                syntax. I had so much fun in this project.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="acc-header">
              <div className="acc-pic-name">
                <img
                  className="avatar"
                  src={aidynavatar}
                  alt="Avatar of Aidyn, a light-skinned person with short brown hair, wearing a grey shirt."
                />
                Aidyn Hillyard (zie/hir/hirs)
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Hi, I'm Aidyn, an empathetic, full-stack software engineer with
                a passion for accessibility through creative, user-driven
                design. My love of learning led me to collaborate with our team
                to create this project planning app. Sometimes it's tough to
                turn ideas into reality, but we hope our app will provide a way
                for you to take that first step in reaching your project goals!
              </p>

              <p>
                I worked as the team coordinator, ensuring our organization,
                task delegation, and strong time management. My primary
                contributions were to spearhead the back-end development, craft
                CSS, and assist with read, create, edit, and delete on the
                Groups page.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export default TeamPage;
