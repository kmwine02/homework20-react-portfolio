import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <div className="main-body">
      <section className="section portfolio">
        <div className="title portfolio">
          <h3>Portfolio</h3>
        </div>
        <div className="info portfolio">
          <Row xs={1} md={2} className="g-4">
            {projects.map((project) => (
              <Col className="card-col">
                <Card
                  key={project.name}
                  style={{ width: "18rem", height: "25rem" }}
                >
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div>
                      <Button
                        variant="primary"
                        href={project.link}
                        target="_blank"
                      >
                        Visit the site
                      </Button>
                      <Card.Link
                        className="card-link"
                        href={project.github}
                        target="_blank"
                      >
                        Visit Github
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
