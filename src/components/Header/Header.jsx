import {
  StyledHeader,
  Container,
  HeaderWrapper,
  LogoLink,
  StyledLink,
  Nav,
  LogoText,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoLink to="/">
            <LogoText>CAR-</LogoText>RENTAL
          </LogoLink>
          <Nav>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </Nav>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
