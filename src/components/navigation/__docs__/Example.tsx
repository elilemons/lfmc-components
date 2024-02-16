import React, { FC } from "react";
import NavigationComponent, { NavigationProps } from "../Navigation";

const Navigation: FC<NavigationProps> = ({
  logo = "http://placekitten.com/200/300",
  backgroundColor = "",
  textColor = "",
}) => {
  return (
    <NavigationComponent
      logo={logo}
      backgroundColor={backgroundColor}
      textColor={textColor}
    />
  );
};

export default Navigation;
