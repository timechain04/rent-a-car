import axios from 'axios';

const $instance = axios.create({
baseURL: 'https://64c2251cfa35860baea14071.mockapi.io',
});

export const fetchCar = async () => {
  const { data } = await $instance.get('/adverts');
  return data;
};

export const fetchCarPerPage = async page => {
  const { data } = await $instance.get('/adverts', {
    params: {
      page: page,
      limit: 8,
    },
  });
  return data;
};
