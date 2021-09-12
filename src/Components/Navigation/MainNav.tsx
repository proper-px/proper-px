import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MainNavLinks } from "../../NavigationData";

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
  const [navLinks, setNavLinks] = useState([{ label: "", url: "" }]);
  const loadNavLinks = () => {
    let links = MainNavLinks.map((page) => {
      return { label: page.label, url: page.url };
    });
    setNavLinks(links);
  };
  useEffect(() => {
    loadNavLinks();
  }, []);
  return (
    <StyledMainNavWrapper>
      <StyledNavList>
        {navLinks.map((page) => {
          return (
            <StyledNavItem>
              <StyledNavLink to={page.url}>{page.label}</StyledNavLink>
            </StyledNavItem>
          );
        })}
      </StyledNavList>
    </StyledMainNavWrapper>
  );
};

export default MainNav;
