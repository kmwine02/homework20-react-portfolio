import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="main-body">
      <section className="section contact">
        <div className="title contact">
          <h3>Contact Me</h3>
        </div>
        <div className="info contact">
          <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
