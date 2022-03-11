import './LandingPage.css';
import Container from 'react-bootstrap/Container';
import backgroundVideo from './videofile.mp4'

const LandingPage = () => {
  return (
    <Container className="landing-page">
      <div className="mainAnimatedDiv">
      <video 
      autoPlay 
      muted id="video"
      style={{
        position: "relative",
        width: "100%",
        left: 0,
        top: 0}}>
      <source src={backgroundVideo} type='video/mp4'></source>  
      </video>
      <h1>GoalGetter</h1>
      <p>Welcome to GoalGetter, a way to organize your projects.  Whether you want to build a birdhouse or plan a cross-country road trip, GoalGetter will help you explore your goals and help you break them down into manageable steps!</p>
      </div>
    </Container>
  );
};

export default LandingPage;
