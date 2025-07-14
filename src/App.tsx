import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home.page';
import Privacy from './pages/privacy/Privacy.page';
import Page404 from './pages/404/404.page';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import RealEstate from './pages/realestate/RealEstate.page';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='realestate' element={<RealEstate />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
