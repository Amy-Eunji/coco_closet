import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as Toggle } from "../../assets/Header/Toggle.svg";
import { ReactComponent as Cart } from "../../assets/Header/Cart.svg";
import { ReactComponent as Buy } from "../../assets/Header/Buy.svg";
import { ReactComponent as Account } from "../../assets/Header/Account.svg";

interface IconProps {
  isRotated: boolean;
}

const Mypage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsRotated((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsRotated(false);
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
      <IconWrapper onClick={toggleMenu}>
        <Icon isRotated={isRotated}>
          <Toggle />
        </Icon>
      </IconWrapper>
      <Title>My Page</Title>
      {isOpen && (
        <Modal ref={modalRef}>
          <MenuItem onClick={toggleMenu}>
            <Cart />
            장바구니
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <Buy />
            주문 내역
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <Account />
            정보 변경
          </MenuItem>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div<IconProps>`
  svg {
    width: 20px;
    height: 20px;
    ${({ isRotated }) =>
      isRotated
        ? css`
            transform: rotate(0deg);
          `
        : css`
            transform: rotate(-90deg);
          `}
    transition: transform 0.3s ease;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;

const Modal = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  top: 140px;
  right: 130px;
  background: #ffffffa0;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  border-radius: 8px;
`;

const MenuItem = styled.div`
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export default Mypage;
