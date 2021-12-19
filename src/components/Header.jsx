import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--lightBlue_1);
  border-bottom: 1px solid var(--mediumSlateBlue);

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;
    a {
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 500;
      display: block;
      padding: 0.5rem 1rem;
      color: var(--dark-Blue2);
    }

    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;

    svg {
      color: var(--darkBlue_1);
    }
    &:hover {
      background-color: #8080803b;
    }
  }

  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      svg {
        color: var(--white);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: var(--lightBlue_2);
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease transform;
      overflow: hidden;
    }

    nav.open {
      transform: translateX(0);
    }

    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width:768px)').matches);
    });
  }, []);

  //   console.log(isMobile);
  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <Logo />
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}

              <ul>
                <li>
                  <Link to="home"> Home </Link>
                </li>
                <li>
                  <Link to="services"> Services </Link>
                </li>
                <li>
                  <Link to="about"> About </Link>
                </li>
                <li>
                  <Link to="contact"> Contact </Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex="0"
                role="button"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
