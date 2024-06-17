import styled from "styled-components";

import { ReactComponent as Cart } from "../../assets/Header/Cart.svg";

const MyPage = () => {
  return (
    <Container>
      <Order>
        <Icon>
          <Cart />
        </Icon>
      </Order>
    </Container>
  );
};

const Container = styled.div``;
const Order = styled.div``;
const Icon = styled.svg`
  width: 50px;
  height: 50px;
  color: #000000;
`;

export default MyPage;
