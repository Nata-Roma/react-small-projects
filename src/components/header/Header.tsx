import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => {
  const btnHome = useRef<HTMLAnchorElement>(null);
  const btnMarkdown = useRef<HTMLAnchorElement>(null);
  const btnCountdown = useRef<HTMLAnchorElement>(null);
  const btnPRS = useRef<HTMLAnchorElement>(null);

  const onMousePosition = (e: any) => {
    const left = (e.nativeEvent.offsetX / e.target.clientWidth) * 100 + '%';
    const top = (e.nativeEvent.offsetY / e.target.clientHeight) * 100 + '%';
    if (btnHome.current && e.target === btnHome.current) {
      btnHome.current.style.setProperty('--left', left);
      btnHome.current.style.setProperty('--top', top);
    }
    if (btnCountdown.current && e.target === btnCountdown.current) {
      btnCountdown.current.style.setProperty('--left', left);
      btnCountdown.current.style.setProperty('--top', top);
    }
    if (btnMarkdown.current && e.target === btnMarkdown.current) {
      btnMarkdown.current.style.setProperty('--left', left);
      btnMarkdown.current.style.setProperty('--top', top);
    }
    if (btnPRS.current && e.target === btnPRS.current) {
      btnPRS.current.style.setProperty('--left', left);
      btnPRS.current.style.setProperty('--top', top);
    }
  };

  return (
    <div className='header-container'>
      <NavLink
        exact
        to='/'
        className='header-link'
        activeClassName='header-link-active'
        onMouseMove={(e) => onMousePosition(e)}
        ref={btnHome}
      >
        <div className='link-content'>Home</div>
      </NavLink>
      <NavLink
        exact
        to='/countdown-timer'
        className='header-link'
        activeClassName='header-link-active'
        onMouseMove={(e) => onMousePosition(e)}
        ref={btnCountdown}
      >
        Countdown
      </NavLink>
      <NavLink
        exact
        to='/markdown-editor'
        className='header-link'
        activeClassName='header-link-active'
        onMouseMove={(e) => onMousePosition(e)}
        ref={btnMarkdown}
      >
        Markdown
      </NavLink>
      <NavLink
        exact
        to='/prs'
        className='header-link'
        activeClassName='header-link-active'
        onMouseMove={(e) => onMousePosition(e)}
        ref={btnPRS}
      >
        P R Scissors
      </NavLink>
    </div>
  );
};
