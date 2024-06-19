import styled from "styled-components";

import Header from "../templates/Header/Header";
import Products from "../templates/Main/Products";
import Footer from "../templates/Footer/Footer";

import Banner from "../assets/Banner.png";
const Main = () => {
  return (
    <Container>
      <Header />
      <BannerWrap>
        <img src={Banner} alt="" />
      </BannerWrap>
      <Products />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 50px 100px 50px 100px;
`;

const BannerWrap = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
`;

export default Main;
