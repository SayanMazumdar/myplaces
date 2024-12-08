import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import MyPlaces from './pages/MyPlaces';
import Cities from './components/Cities';
import Countries from './components/Countries';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CityDetails from './components/CityDetails';

export default function App() {

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='myplaces' element={<MyPlaces setCities={setCities} setLoading={setLoading} />}>
          <Route index element={<Navigate replace to='cities' />} />
          <Route path='cities' element={<Cities cities={cities} loading={loading} />} />
          <Route path='countries' element={<Countries cities={cities} />} />
          <Route path='cities/:id' element={<CityDetails cities={cities} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
