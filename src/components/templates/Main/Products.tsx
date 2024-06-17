import styled from "styled-components";

import { PRODUCTSINFO } from "../../datas/ProductsInfo";

const Products = () => {
  return (
    <Container>
      <ItemWrap>
        {PRODUCTSINFO.map(({ id, image, pdname, price }) => (
          <Item key={id}>
            <img src={image} alt={pdname} />
            <Name>{pdname}</Name>
            <Price>{price}</Price>
          </Item>
        ))}
      </ItemWrap>
    </Container>
  );
};

const Container = styled.div``;
const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid #000000;
`;
const Item = styled.div`
  display: flex;
  width: 30px;
  height: 40px;
  img {
    width: 100%;
    min-width: 300px;
    height: 400px;
  }
`;

const Name = styled.div`
  color: #000000;
`;
const Price = styled.p``;

export default Products;
