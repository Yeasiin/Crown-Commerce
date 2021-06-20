import styled from "styled-components";

export const StyledCheckOutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  & > .image-container {
    width: 23%;
    padding-right: 15px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
  & > .name,
  .quantity,
  .price {
    width: 23%;
  }

  & > .quantity {
   display: flex;
   gap:10px;
   &> .arrow{
     cursor:pointer;
   }
  }

  & > .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;
