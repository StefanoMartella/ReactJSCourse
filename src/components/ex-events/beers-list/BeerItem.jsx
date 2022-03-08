import styled from "styled-components";

const StyledBeerItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0px 5px 20px 0px #dedede;
  border-color: ${(props) => (props.isEven ? "#FECDAA" : "#FAFAC6")};
  background-color: ${(props) => (props.isEven ? "#FECDAA99" : "#FAFAC699")};
  border-style: solid;

  img {
    height: 120px;
    aspect-ratio: 5 / 8;
    margin: 12px;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.isEven ? "#FECDAA" : "#FAFAC6")};
  }

  div {
    margin: 12px;
    text-align: left;
  }
`;

function BeerItem({ beer, isEven }) {
  return (
    <StyledBeerItem isEven={isEven}>
      <img src={beer.imagePath} alt="45x80" />
      <div>
        <h4>{beer.name}</h4>
        <h6>{beer.price}</h6>
      </div>
    </StyledBeerItem>
  );
}

export default BeerItem;
