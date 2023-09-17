import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  margin-top: 200px;
  font-size: 18px;
  color: #ffff;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;
  color: #ff0000;
  display: block;
  text-decoration: underline;
  text-align: center;
  margin-top: 10px;
  transition: text-decoration 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-decoration: none;
  }
`;
