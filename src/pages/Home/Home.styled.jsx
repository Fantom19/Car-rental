import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 89vh;
  background-image: url('https://s1.1zoom.ru/big0/572/Lamborghini_2015_ares_442967.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const Caption = styled.h2`
  margin-bottom: 18px;
`;

export const Text = styled.p`
  margin-bottom: 40px;
`;

export const Button = styled(Link)`
  margin-left: auto;
  padding: 14px 20px;
  text-align: center;
  color: #fff;
  background-color: red;
  border-radius: 8px;
  transition: background-color 300ms;

  &:hover {
    color: black;
    background-color: #ff3434;
  }
`;
