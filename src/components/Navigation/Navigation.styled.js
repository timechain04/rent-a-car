import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid #00000000;
  background-color: #00000000;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #DCDCDC;
    color: white;

  }
  &:active {
    background-color: #DCDCDC;
    color: white;
  }
`;

export const StyledNavPage = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;
