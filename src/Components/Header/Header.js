'use client';

import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MenuContext } from '../../Context/MenuContext';
import HeaderStyles from './Header.styles';
import DropdownLinks from './DropdownLinks';
import MenuDrawer from './MenuDrawer';
import MobileDropdownLinks from './MobileDropdownLinks';

export default function Header() {
  const { isDropdownOpen, toggleDropdown, hoverToggleDropdown, toggleMenu } =
    useContext(MenuContext);

  const [width, setWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // console.log(width);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // Framer Motion
  const animateFrom = { height: '0' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0' };
  const transition = {
    height: { ease: 'easeInOut', duration: 1 },
  };

  return (
    <HeaderStyles>
      <div className={width < 800 ? 'mobile-social-bar' : 'social-bar'}>
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram Icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn Icon" />
          </a>
        </div>
        <div className="contact-links">
          <a className="call-click" href="tel:+441332552320">
            <PhoneRoundedIcon sx={{ fontSize: '24px' }} />
            01332 552 320
          </a>
          <a
            className="email-click"
            href="mailto:enquiries@pac-electrical.co.uk"
          >
            <EmailRoundedIcon sx={{ fontSize: '24px' }} />
            enquiries@pac-electrical.co.uk
          </a>
        </div>
      </div>
      {width < 800 ? (
        <div className="mobile-bar">
          <div className="logo">
            <Link href="/">
              <img
                src="/logo/pac-logo-electrical-reverse.svg"
                alt="PAC Electrical Logo"
              />
            </Link>
          </div>
          <MenuDrawer>
            <div className="links">
              <ul>
                <li
                  className="services-li"
                  onClick={() => toggleDropdown('services')}
                >
                  Services
                  {isDropdownOpen === 'services' ? (
                    <div className="icon">
                      <ExpandMoreRoundedIcon
                        sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
                      />
                    </div>
                  ) : (
                    <div className="icon">
                      <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                    </div>
                  )}
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/reviews">Reviews</Link>
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/news">News</Link>
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <AnimatePresence>
              {isDropdownOpen === 'services' && (
                <motion.div
                  initial={animateFrom}
                  animate={animateTo}
                  exit={animateExit}
                  transition={transition}
                  className="mobile-dropdown"
                >
                  <div className="dropdown-content">
                    <MobileDropdownLinks />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MenuDrawer>
        </div>
      ) : (
        <>
          <div className="bar">
            <div className="logo">
              <Link href="/">
                <img
                  src="/logo/pac-logo-electrical-reverse.svg"
                  alt="PAC Electrical Logo"
                />
              </Link>
            </div>
            <div className="links">
              <ul>
                <li
                  className="services-li header-link"
                  // onClick={() => toggleDropdown('services')}
                  onMouseEnter={() => hoverToggleDropdown('services')}
                >
                  Services
                  <div className="icon">
                    <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                  </div>
                </li>
                <li onClick={() => toggleDropdown('')} className="header-link">
                  <Link href="/case-studies" className="header-link">
                    Case Studies
                  </Link>
                </li>
                <li onClick={() => toggleDropdown('')} className="header-link">
                  <Link href="/news">News</Link>
                </li>
                <li onClick={() => toggleDropdown('')} className="header-link">
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => toggleDropdown('')} className="header-link">
                  <Link href="/reviews">Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
          <AnimatePresence>
            {isDropdownOpen === 'services' && (
              <motion.div
                initial={animateFrom}
                animate={animateTo}
                exit={animateExit}
                transition={transition}
                className="dropdown"
                onMouseLeave={() => toggleDropdown(false)}
              >
                <div className="dropdown-inner">
                  <div className="dropdown-menu">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/logo/pac-logo-electrical.svg"
                          alt="PAC Electrical Logo"
                        />
                      </Link>
                    </div>
                    <div className="links">
                      <ul>
                        <li
                          className="services-li header-link"
                          onClick={() => toggleDropdown('services')}
                          onMouseEnter={() => hoverToggleDropdown('services')}
                        >
                          Services
                          <div className="icon">
                            <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                          </div>
                        </li>
                        <li
                          onClick={() => toggleDropdown('')}
                          className="header-link"
                        >
                          <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li
                          onClick={() => toggleDropdown('')}
                          className="header-link"
                        >
                          <Link href="/news">News</Link>
                        </li>
                        <li
                          onClick={() => toggleDropdown('')}
                          className="header-link"
                        >
                          <Link href="/about">About Us</Link>
                        </li>
                        <li
                          onClick={() => toggleDropdown('')}
                          className="header-link"
                        >
                          <Link href="/reviews">Reviews</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown-content">
                    <DropdownLinks />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </HeaderStyles>
  );
}
