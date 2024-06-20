import styled from "styled-components";
import { Link } from "react-router-dom";

import Menu from "./Menu";
import Mypage from "./Mypage";

import Logo from "../../assets/Header/Logo.png";
import { ReactComponent as Cart } from "../../assets/Header/Cart.svg";

const Header = () => {
  return (
    <Container>
      <Menu />
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Mypage />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.svg`
  width: 50px;
  height: 50px;
  color: #000000;
`;

export default Header;
