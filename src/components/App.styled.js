import styled from 'styled-components';

export const ContainerApp = styled.nav`
   padding: 20px 60px;
   background-color: rgb(245,245,245);
   border-bottom: 2px solid #000000;
`;
export const BtnNav = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #00000000;
  background-color: #00000000;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #276ba2;
    color: white;
    transition: 350ms;
  }
  &:active {
    background-color: #276ba2;
    color: white;
  }
`;
