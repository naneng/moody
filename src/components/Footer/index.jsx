import React from "react";
import { Footer, H2, H2Middle, H3 } from "./styles";

const FooterComponent = ({textColor}) => (
  <Footer $color={textColor}>
    <H2>Left</H2>
    <H2Middle $color={textColor} >Sway</H2Middle>
    <H2>Right</H2>
    <H3>Copyrights 2023 Katrina Ariola. All rights reserved.</H3>
  </Footer>
);

export default FooterComponent;
