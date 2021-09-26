import { Fragment } from "react";

import {  FormGroup, Input, Row, Col, Button } from "reactstrap";

const Home = () => {
  return (
    <Fragment>
      <form className="my-5">
        <Row>
          <Col md={9}>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="username"
                bsSize="lg"
                placeholder="Enter github username"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Button className="btn-custom-color">Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </form>
    </Fragment>
  );
};

export default Home;
