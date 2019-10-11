import React from 'react';
import Container from '../Container/Container';
import { infoContent } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero title={infoContent.title} image={infoContent.image}/>
    <p>{infoContent.content}</p>
  </Container>
);

export default Info;