import React, { useEffect, useState, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MenuContext } from '../../Context/MenuContext';

function useOutsideAlerter(ref) {
  const { setIsModalOpen } = useContext(MenuContext);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsModalOpen]);
}

const Modal = ({
  show,
  children,
  title,
  id,
  backgroundColor,
  textColor = 'white',
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { setIsModalOpen, scrollPosition } = useContext(MenuContext);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const modalContent =
    show === id ? (
      <StyledModalOverlay style={{ top: `${scrollPosition}px` }}>
        <StyledModal
          ref={wrapperRef}
          style={{
            backgroundColor: `${backgroundColor}`,
            color: `${textColor}`,
          }}
        >
          <StyledModalHeader>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          {title && <h1>{title}</h1>}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalOverlay>
    ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    );
  }
  return null;
};

const StyledModalBody = styled.div`
  padding-top: 0px;
  .benefits-list {
    color: white;
    padding: 0 10px 10px;
    h5 {
      font-size: 2rem;
      font-weight: 500;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }
    li {
      margin-bottom: 5px;
      list-style-type: disc;
      list-style-position: inside;
      text-transform: none;
      line-height: 2rem;
    }
  }
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    font-size: 25px;
    color: white;
  }
`;

const StyledModal = styled.div`
  border-radius: 15px;
  padding: 15px;
  max-width: 500px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
