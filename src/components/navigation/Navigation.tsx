// components/navigation/navigation.tsx
import React from "react";
import styled from "styled-components";

export type NavigationProps = {
  logo?: string;
  backgroundColor?: string;
  textColor?: string;
};

const StyledNavigation = styled.header<NavigationProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.textColor ? props.textColor : "#000")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  padding: 14px 30px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 10px;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    a:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;

const Navigation: React.FC<NavigationProps> = ({
  logo,
  backgroundColor,
  textColor,
  ...props
}) => {
  return (
    <StyledNavigation
      logo={logo}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      <img src={logo} alt="Logo" />
      <NavItems>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </NavItems>
    </StyledNavigation>
  );
};

export default Navigation;
