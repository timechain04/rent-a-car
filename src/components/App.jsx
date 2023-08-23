import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Favorite = lazy(() => import('pages/FavoritePage/FavoritePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
