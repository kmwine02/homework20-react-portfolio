import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <div className="main-body">
      <h3>Portfolio</h3>
      <div>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project) => (
            <Col>
              <Card className="bg-dark text-white">
                <Card.Img src={project.image} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                  <Card.Text>{project.link}</Card.Text>
                  <Card.Text>{project.github}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
