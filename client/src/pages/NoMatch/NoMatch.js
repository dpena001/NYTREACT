import React from "react";
import { Jtron,Ito,Container } from "../../components/Main";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
  <Container>
      <Jumbotron>
        <Jtron><Ito></Ito> New York Times Search</Jtron>
      </Jumbotron>
      <h1>404 Page Not Found</h1>
            <a href="/saved"><img src="../../images/blue-home-icon.png" alt="Back to MainPage">
            </img>
          </a>
         </Container>;

export default NoMatch;
