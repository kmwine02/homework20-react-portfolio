import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <div className="main-body">
      <h3>Portfolio</h3>
      <div>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project) => (
            <Col>
              <Card key={project.name} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Visit the site
                  </Button>
                  <Card.Link href={project.github} target="_blank">
                    Visit Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
