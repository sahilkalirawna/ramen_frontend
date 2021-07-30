import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.module.css";

const Footer = () => {
  return (
    <Container className='p-0 footer_main' fluid>
      <hr />
      <p className='text-muted p-0 text-center'>Footer Text</p>
    </Container>
  );
};

export default Footer;
