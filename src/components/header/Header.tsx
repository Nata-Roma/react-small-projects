import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => (
  <div className='header-container'>
    <NavLink
      exact
      to='/'
      className='header-link'
      activeClassName='header-link-active'
    >
      Home
    </NavLink>
    <NavLink
      exact
      to='/countdown-timer'
      className='header-link'
      activeClassName='header-link-active'
    >
      Countdown Timer
    </NavLink>
    <NavLink
      exact
      to='/markdown-editor'
      className='header-link'
      activeClassName='header-link-active'
    >
      Markdown Editor
    </NavLink>
  </div>
);
