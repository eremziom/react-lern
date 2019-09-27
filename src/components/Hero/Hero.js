import React from 'react';

import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = argument => (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(argument.title)}</h2>
        <img className={styles.image} src={argument.image}></img>
      </header>
    );
  
    Hero.propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
    };

export default Hero;