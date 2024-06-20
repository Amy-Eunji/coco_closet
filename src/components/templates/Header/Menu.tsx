import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/Header/HamburgerMenu.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container>
      <Icon onClick={toggleMenu}>
        <MenuIcon />;
      </Icon>
      {isOpen && (
        <Modal ref={modalRef}>
          <MenuItem onClick={toggleMenu}>HOME</MenuItem>
          <MenuItem onClick={toggleMenu}>TOP</MenuItem>
          <MenuItem onClick={toggleMenu}>ONE-PIECE</MenuItem>
          <MenuItem onClick={toggleMenu}>ACC</MenuItem>
          <hr />
          <MenuItem onClick={toggleMenu}>Q&A</MenuItem>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Icon = styled.svg`
  width: 50px;
  height: 50px;
`;

const Modal = styled.div`
  position: absolute;
  width: 200px;
  height: 400;
  top: 60px;
  left: 0px;
  background: #ffffffa0;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  border-radius: 8px;
`;

const MenuItem = styled.div`
  padding: 10px;
  line-height: 3;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;

export default Menu;
