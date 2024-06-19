import styled from "styled-components";
import { ReactComponent as Instagram } from "../../assets/Footer/Instagram.svg";
import { ReactComponent as Naver } from "../../assets/Footer/Naver.svg";
import Logo from "../../assets/Footer/투명배경.png";
import Talktalk from "../../assets/Footer/NaverTalk.jpg";

const Footer = () => {
  return (
    <Container>
      <LogoWrap>
        <img src={Logo} alt="" />
        <InfoWrap>
          <p>ABOUT US</p>
          <Info>
            <Title>company : 코코네 옷방</Title>
            <CEO>CEO : 이은지</CEO>
            <Num>business licence : 208-04-44798</Num>
            <Address>address : 경기도 의정부시 태평로24번길</Address>
            <div>copyrightⓒ2024 코코네옷방. All Rights Reserved.</div>
          </Info>
        </InfoWrap>
      </LogoWrap>
      <SNSwrap>
        <p>COCO_Closet SNS</p>
        <a
          href="https://www.instagram.com/coco_closet_s2/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://smartstore.naver.com/coco_closet"
          target="_blank"
          rel="noreferrer"
        >
          <Naver />
        </a>
      </SNSwrap>
      <ContactWrap>
        <p>CONTACT US</p>
        <a
          href="https://talk.naver.com/ct/w5znix?frm=psf"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Talktalk} alt="" />
        </a>
      </ContactWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 250px;
  /* border: 1px solid #ebebeb; */
  gap: 10px;
  padding: 30px;
  margin: 100px 0;

  p {
    font-size: 20px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: 18px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const CEO = styled.div``;
const Num = styled.div``;
const Address = styled.div``;

const SNSwrap = styled.div`
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }
`;

const ContactWrap = styled.div`
  gap: 10px;

  img {
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`;

export default Footer;
