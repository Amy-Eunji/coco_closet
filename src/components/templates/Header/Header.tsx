import styled from "styled-components";

import Menu from "./Menu";
import MyPage from "./MyPage";

import Logo from "../../assets/Header/Logo.png";

const Header = () => {
  return (
    <Container>
      <Menu />
      <img src={Logo} alt="Logo" />
      <MyPage />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
