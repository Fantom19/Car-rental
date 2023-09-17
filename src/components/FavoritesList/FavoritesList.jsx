import CarItem from 'components/CarsItem/CarsItem';
import { Catalog } from 'components/CarsList/CarsList.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const FavoritesList = () => {
  const cars = useSelector(selectFavorites);
  return (
    <Catalog>
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </Catalog>
  );
};
export default FavoritesList;
