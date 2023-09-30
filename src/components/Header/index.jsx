import React from "react";
import { Logo, Header } from "./styles";

const HeaderComponent = ({textColor}) => (
  <Header>
    <Logo title="MoodyPlant" $color={textColor}/>
  </Header>
);

export default HeaderComponent;
