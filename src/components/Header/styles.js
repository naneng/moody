import styled, { css } from "styled-components";
import { ReactComponent as LogoSVG } from "./MOODYPlant.svg";


export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;

  @media (max-width: 700px) {
    padding: 30px;
  }
`;

export const Logo = styled(LogoSVG).attrs(({$color}) => ({
  style: {
    fill: `${$color}`
  }
}))`
  height: auto;
  max-width: 760px;
  width: 100%;
  z-index: 1;
// style="fill:black;fill:black;fill-opacity:1;"
  path {
    fill: inherit;
  }
`;
