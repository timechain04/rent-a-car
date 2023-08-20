import React from 'react';
import { SelectCars, SelectFilter } from 'redux/selectors';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormStyled } from './StyledFilter';

const Filter = ({ onFilterChange }) => {
  const cars = useSelector(SelectCars);
  const filteredCars = useSelector(SelectFilter);
    let filteredResults;

    if (capitalizedModel) {
      filteredResults = allCase(cars, 'make', capitalizedModel);
    } else {
      filteredResults = cars.filter(car => car.rentalPrice === carPrice);
    }

    console.log(filteredResults);
    if (!filteredResults.length > 0) {
      return;
    } else {
      onFilterChange(filteredResults);
    }
  };


  const validationSchema = Yup.object({
    model: Yup.string(),
    rentalPrice: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        model: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      onSubmit={values => {
        handleOnSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <label>
          Car brand

    </Formik>
  );
};

export default Filter;
