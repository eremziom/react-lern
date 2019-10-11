import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

class FAQ extends React.Component {

  render () {
    return (
      <Container>
        <Hero title={faqContent.title} image={faqContent.image}/>
        <p>{faqContent.content}</p>
      </Container>
    );
  }
}

export default FAQ;

