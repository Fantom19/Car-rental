import styled from 'styled-components';
export const LoadBtn = styled.button`
  display: block;
  color: #ff0000;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin: 0 auto 150px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    text-decoration-line: none;
    color: #ff3434;
  }
`;
