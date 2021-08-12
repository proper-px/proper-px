import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface IMainNavProps {}

const StyledMainNavWrapper = styled.nav`
  background-color: ${(props) => props.theme.brandColors.primary};
  padding: ${(props) => props.theme.navbar.barPadding};
  display: flex;
`;

const StyledNavList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  display: flex;
`;

const StyledNavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: ${(props) => props.theme.colors.light};
  font-family: ${(props) => props.theme.font.family.sansSerif};
  padding: ${(props) => props.theme.navbar.linkPadding};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MainNav: React.FC<IMainNavProps> = () => {
  return (
    <StyledMainNavWrapper>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/skills">Skills</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/about">About Me</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/connect">Let's Connect</StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledMainNavWrapper>
  );
};

export default MainNav;
