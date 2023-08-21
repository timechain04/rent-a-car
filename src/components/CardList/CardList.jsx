import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { SelectCars } from 'redux/selectors';
import { BtnCont, LoadMoreBtn, StyledList } from './CardList.styled';
import CarItem from 'components/CardItem/CardItem';

function CardList({ onOpenModal, favorites, page }) {
  const cars = useSelector(SelectCars);
  const dispatch = useDispatch();
  const itemsPerPage = 8;
  const [loadedCars, setLoadedCars] = useState(itemsPerPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  let displayedCars;
  if (page === 'favorites') {
    displayedCars = cars.filter(car => favorites.includes(car.id));
  } else {
    displayedCars = cars.slice(0, loadedCars);
  }

  const onLoadMore = () => {
    setLoadedCars(prevLoadedCars => prevLoadedCars + itemsPerPage);
  };

  return (
    <>
      <StyledList>
        {displayedCars.map(car => {
          return (
            <CarItem key={car.id} carInfo={car} onOpenModal={onOpenModal} />
          );
        })}
      </StyledList>
      {page !== 'favorites' && loadedCars < cars.length && (
        <BtnCont>
          <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
        </BtnCont>
      )}
    </>
  );
}

export default CardList;
