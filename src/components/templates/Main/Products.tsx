import styled from "styled-components";

import { PRODUCTSINFO } from "../../datas/ProductsInfo";
import { ReactComponent as Like } from "../../assets/Products/Like.svg";
import { ReactComponent as PlusCart } from "../../assets/Products/PlusCart.svg";

const Products = () => {
  const formatPrice = (price: { toLocaleString: (arg0: string) => any }) => {
    return `₩${price.toLocaleString("ko-KR")}`;
  };
  return (
    <Container>
      <ItemWrap>
        {PRODUCTSINFO.map(({ id, image, pdname, price }, index) => {
          const discountPrice = price * 0.9;
          return (
            <Item key={`${id}-${index}`}>
              <img src={image} alt={pdname} />
              <Info>
                <Name>🖤 {pdname} 🖤</Name>
                <Price>{formatPrice(price)}</Price>
                <Discount>{formatPrice(discountPrice)}</Discount>
                <LikeIcon />
                <PlusCartIcon />
              </Info>
            </Item>
          );
        })}
      </ItemWrap>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 50px 0 50px;
`;
const ItemWrap = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(3, 1fr);
  gap: 40px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 300px;
    height: 300px;
    margin-bottom: 10px;
  }
`;

const Info = styled.div`
  padding-left: 15px;
`;

const Name = styled.div`
  font-size: 25px;
`;

const Price = styled.div`
  font-size: 15px;
  text-decoration: line-through;
  color: #a1a1a1;
`;

const Discount = styled.div`
  font-size: 20px;
`;

const LikeIcon = styled(Like)`
  margin: 5px 10px 0 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: currentColor;
  transition: fill 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
    fill: red;
  }
`;

const PlusCartIcon = styled(PlusCart)`
  margin: 5px 10px 0 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: fill 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export default Products;
