import CarItem from 'components/CarsItem/CarsItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { Catalog } from './CarsList.styled';

const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <Catalog>
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </Catalog>
  );
};
export default CarsList;
