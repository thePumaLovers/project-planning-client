import { useParams } from "react-router";

const ProjectPage = () => {
let params = useParams();
console.log(params)

  return (
    <div>
      <h2>I'm a hello</h2>
    </div>
  );
};

export default ProjectPage;
