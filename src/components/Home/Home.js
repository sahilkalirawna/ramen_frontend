import React from "react";
import { Container } from "react-bootstrap";
// import Jumbotron from 'react-bootstrap';s
import AllMembers from "./../AllMembers/Allmembers";

const Home = () => {
  return (
    <Container className='py-5'>
      <AllMembers />
    </Container>
  );
};

export default Home;
