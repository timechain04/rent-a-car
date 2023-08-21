import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import {
  SelectCars,
  SelectError,
  SelectFavorites,
  SelectIsLoading,
} from 'redux/selectors';


export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(SelectCars);
  const favorites = useSelector(SelectFavorites);
  const isLoading = useSelector(SelectIsLoading);
  const error = useSelector(SelectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

