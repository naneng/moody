import styled from "styled-components";
import { Marginals } from "../Header/styles";

export const Footer = styled.footer.attrs(({ $color }) => ({
  style: {
    color: `${$color}`
  }
}))`
  ${Marginals}
  bottom: 0;
  justify-content: space-between;
  padding: 15px;
`;

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  padding: 15px;

  @media (max-width: 900px) {
    font-size: 44px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
    padding: 0 0 15px 0;
  }
`;

export const H2Middle = styled(H2)`
  flex-grow: 1;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    background-color: ${({$color}) => $color};
    display: block;
    position: absolute;
    height: 2px;
    left: 15px;
    right: 15px;
    top: 55%;
  }
`;

export const H3 = styled.h3`
  font-size: 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 490px) {
    font-size: 8px;
    padding: 0 auto;
  }
`;
