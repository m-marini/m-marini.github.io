import React, { FunctionComponent } from 'react';
import './App.css';
import { Navbar, Container, Card, Button, ButtonGroup, Row, Col, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const version = `${process.env.REACT_APP_VERSION}`;
const date = '';

interface AppData {
  title: string,
  text: string,
  viewUrl?: string,
  githubUrl: string
}

const APP_CARDS = [
  {
    title: 'Modal Progression',
    text: 'Create chord progressions on modal scales.',
    viewUrl: 'https://m-marini.github.io/modprog/',
    githubUrl: 'https://github.com/m-marini/modprog/'
  } as AppData, {
    title: 'Railways',
    text: 'Switch rails to send trains to the station platforms and then to the right destinations.',
    githubUrl: 'https://github.com/m-marini/railways/'
  }, {
    title: 'Routes',
    text: 'Connect the cities and simulate the traffics of veicles.',
    githubUrl: 'https://github.com/m-marini/routes/'
  }, {
    title: 'ATC - Air Traffic Control',
    text: 'Your goal is to manoeuver safely the planes in your air traffic area.',
    viewUrl: 'https://m-marini.github.io/atc/',
    githubUrl: 'https://github.com/m-marini/atc'
  }, {
    title: 'JConquest',
    text: 'Manage your space fleets to conquest all planets in the planetery system.',
    githubUrl: 'https://github.com/m-marini/jconquest'
  }, {
    title: 'Leibnitz',
    text: 'Compute the 3D bodies trajectories by differential equations.',
    viewUrl: 'https://m-marini.github.io/leibniz/',
    githubUrl: 'https://github.com/m-marini/leibniz'
  }, {
    title: 'Rocket',
    text: '3D rendering of rocket land for Reinforcement Learning AI scalarl project',
    viewUrl: 'http://m-marini.github.io/rocket/',
    githubUrl: 'https://github.com/m-marini/rocket'
  }, {
    title: 'Fredy',
    text: 'Fredy inference engine by fuzzy logic',
    viewUrl: 'http://m-marini.github.io/fredy-web/',
    githubUrl: 'https://github.com/m-marini/fredy-web'
  }, {
    title: 'Other ...',
    text: 'Other projects in GitHub',
    githubUrl: 'https://github.com/m-marini?tab=repositories'
  }];

const AppList: FunctionComponent<{ apps?: AppData[] }> = ({ apps = [] }) => {
  return (
    <CardGroup>
      <Row xs={1} md={2} xl={3}>
        {
          apps.map(({ title, text, viewUrl, githubUrl }, key) => (
            <Card key={key} border="primary" className="shadow-sm">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <ButtonGroup>
                  {(!!viewUrl) ? (
                    <Button href={viewUrl} variant="outline-secondary" size="sm">View</Button>
                  ) : ''
                  }
                  <Button href={githubUrl} variant="outline-secondary" size="sm">Github</Button>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          ))
        }
      </Row>
    </CardGroup>
  );
}

export const App: FunctionComponent<{}> = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">www.mmarini.org</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row>
              <Card className="bg-secondary-subtle">
                <Card.Header >
                  <h1 className="text-center">Project Portfolio {version} {date}</h1>
                </Card.Header>
              </Card>
            </Row >
            <Row>
              <AppList apps={APP_CARDS}></AppList>
            </Row>
            <Row>
              <Col>
                <hr />
                <footer className="text-muted">
                  <p>&copy; Marco Marini</p>
                </footer>
              </Col>
            </Row>
          </Container >
        </Col>
      </Row>
    </Container>
  );
}
