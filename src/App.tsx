import React, { FunctionComponent } from 'react';
import './App.css';
import { Navbar, Container, Card, Button, ButtonGroup, CardDeck, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FunctionComponent<{}> = () => {
  return (
    <div className="bg-light">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">www.mmarini.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Jumbotron>
          <h1>Project Portfolio</h1>
        </Jumbotron>
        <CardDeck>
          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Modal Progression</Card.Title>
              <Card.Text>
                Create chord progressions on modal scales.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://m-marini.github.io//modprog/" variant="outline-secondary" size="sm">View</Button>
                <Button href="https://github.com/m-marini//modprog/" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Railways</Card.Title>
              <Card.Text>
                Switch rails to send trains to the station platforms and then to the right destinations.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://github.com/m-marini//railways/" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Routes</Card.Title>
              <Card.Text>
                Connect the cities and simulate the traffics of veicles.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://github.com/m-marini/routes/" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>ATC - Air Traffic Control</Card.Title>
              <Card.Text>
                <p>Your goal is to manoeuver safely the planes in your air traffic area.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://m-marini.github.io/atc/" variant="outline-secondary" size="sm">View</Button>
                <Button href="https://github.com/m-marini/atc" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br />
        <CardDeck>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>JConquest</Card.Title>
              <Card.Text>
                Manage your space fleets to conquest all planets in the planetery system.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://github.com/m-marini/jconquest" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Leibnitz</Card.Title>
              <Card.Text>
                Compute the 3D bodies trajectories by differential equations.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="http://www.mmarini.org/leibniz/" variant="outline-secondary" size="sm">View</Button>
                <Button href="https://github.com/m-marini/leibniz" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Count down</Card.Title>
              <Card.Text>
                My favorite count down
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="http://m-marini.github.io/countdown/" variant="outline-secondary" size="sm">View</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card border="primary" className="shadow-sm">
            <Card.Body>
              <Card.Title>Other ...</Card.Title>
              <Card.Text>
                Other projects in GitHub
                </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button href="https://github.com/m-marini?tab=repositories" variant="outline-secondary" size="sm">GitHub</Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container >

      <hr />
      <footer className="text-muted">
        <Container>
          <p>&copy; Marco Marini</p>
        </Container>
      </footer>
    </div >
  );
}
