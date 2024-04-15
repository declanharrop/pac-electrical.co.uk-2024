'use client';

import { useEffect, createContext, useState } from 'react';

const defaultValues = {
  // Menu
  isMenuOpen: false,
  toggleMenu: () => {},
  // Search
  isSearchOpen: false,

  // Dropdown
  isDropdownOpen: false,
  toggleDropdown: () => {},
};

export const MenuContext = createContext(defaultValues);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    function handleResize() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (dropdown) => {
    if (isDropdownOpen === 'services') {
      setIsDropdownOpen('');
      return;
    }
    if (dropdown === 'isDropdownOpen') {
      setIsDropdownOpen(false);
      return;
    }
    setIsDropdownOpen(dropdown);
  };

  const hoverToggleDropdown = (dropdown) => {
    if (dropdown === 'isDropdownOpen') {
      setIsDropdownOpen(false);
      return;
    }
    setIsDropdownOpen(dropdown);
  };

  const toggleModal = (id) => {
    if (isModalOpen === id) {
      setIsModalOpen(false);
      return;
    }
    setIsModalOpen(id);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        isSearchOpen,
        setIsSearchOpen,
        isDropdownOpen,
        toggleDropdown,
        hoverToggleDropdown,
        closeMenu,
        setIsModalOpen,
        isModalOpen,
        toggleModal,
        scrollPosition,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
