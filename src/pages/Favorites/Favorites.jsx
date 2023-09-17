import React from 'react';
import { Container } from 'components/Header/Header.styled';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectFavorites } from 'redux/selectors';
import FavoritesList from 'components/FavoritesList/FavoritesList';
import { Text, LinkStyled } from './Favorites.styled';

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      {favorites.length === 0 ? (
        <div>
          <Text>Your favorites list is empty.</Text>
          <LinkStyled to="/catalog">Go to Catalog</LinkStyled>
        </div>
      ) : (
        <FavoritesList cars={favorites} />
      )}
    </Container>
  );
};

export default Favorites;
