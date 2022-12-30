import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  background: rgb(175, 175, 175);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  height: 60px;
  border: 3px solid #ccc;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const NavItemStyled = styled(NavLink)`
  font-size: 24px;
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
