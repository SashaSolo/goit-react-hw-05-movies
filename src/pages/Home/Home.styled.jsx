import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const NavItem = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #343333;
  &:hover,
  &:focus {
    color: rgb(247, 64, 2);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-left: 20px;
`;

export const Title = styled.h2`
  padding-left: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  margin-bottom: 7px;
  color: orangered;
`;

export const NavItemStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #343333;
  &:hover,
  &:focus {
    color: rgb(247, 64, 2);
  }
`;
