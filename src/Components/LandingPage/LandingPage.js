import './LandingPage.css';
import Container from 'react-bootstrap/Container';
import backgroundVideo from './videofile.mp4'

const LandingPage = () => {
  return (
    <Container className="landing-page">
      <div className="Main Animation Div">
      <video autoPlay muted id="video">
      <source src={backgroundVideo} type='video/mp4'></source>  
      </video>
      <div className="animatedDiv div1">Think it</div>
      <div className="animatedDiv div2">Dream it</div>
      <div className="animatedDiv div3">Plan it</div>
      <div className="animatedDiv div4">Do it</div>
      <div className="animatedDiv div5">Done: With project planner</div>
      </div>
      
      <h1>Project Planning</h1>
      <p>Welcome to Project Planning, a way to organize your projects.  Whether you want to build a birdhouse or plan a cross-country road trip, Project Planning will help you explore your goals and help you break them down into manageable steps!</p>
    </Container>
  );
};

export default LandingPage;
