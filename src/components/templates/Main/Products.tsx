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
        {PRODUCTSINFO.map(({ id, image, pdname, price, url }, index) => {
          const discountPrice = price * 0.9;
          return (
            <Item key={`${id}-${index}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={image} alt={pdname} />
              </a>
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
  width: 100%;
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
    border-radius: 8px;
  }
`;

const Info = styled.div`
  padding-left: 15px;
  line-height: 30px;
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
    transform: scale(1.2);
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
