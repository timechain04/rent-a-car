import { Suspense } from 'react';

import Loader from './Loader/Loader';
import { BtnNav, ContainerApp } from './App.styled';

export const App = () => {
  return (
    <div>
      <ContainerApp>
        <Link to="/">
          <BtnNav>Home</BtnNav>
        </Link>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
