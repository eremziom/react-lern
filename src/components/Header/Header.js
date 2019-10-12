import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings, navigation} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component{

  render () {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.iconName} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>{navigation.home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{navigation.info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{navigation.faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
