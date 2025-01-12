import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import MyPlaces from './pages/MyPlaces';
import Cities from './components/Cities';
import Countries from './components/Countries';
import CityDetails from './components/CityDetails';
import NewForm from './components/NewForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CitiesProvider } from './CitiesContext';

export default function App() {

  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='login' element={<Login />} />
          <Route path='myplaces' element={<MyPlaces />}>
            <Route index element={<Navigate replace to='cities' />} />
            <Route path='cities' element={<Cities />} />
            <Route path='countries' element={<Countries />} />
            <Route path='cities/:id' element={<CityDetails />} />
            <Route path='addcity' element={<NewForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  )
}
