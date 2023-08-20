import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { Catalog } from 'pages/Catalog/Catalog';
import { BtnNav, ContainerApp } from './StyledApp';

export const App = () => {
  return (
    <div>
      <ContainerApp>
        <Link to="/">
          <BtnNav>Home</BtnNav>
        </Link>
        <Link to="/catalog">
          <BtnNav>Catalog</BtnNav>
        </Link>
        <Link to="/favorites">
          <BtnNav>Favorites</BtnNav>
        </Link>
      </ContainerApp>
      <main>
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
