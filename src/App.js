import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Repair from './pages/repair';
import Accessories from './pages/accessories';
import Navbar from './components/navbar';
import  Background from './components/background';
import Cards from './components/cards';
import Call from './components/call';
import Offer from './components/offer';
import Testimonals from './components/testimonals';
import Footer from './components/footer';
import BatteryCard from './components/batteryCard';
import AboutPart from './components/aboutPart';
import AccessoriesCard from './components/AccesoriesCard';
import AccesoriesContent from './components/accesoriesContent';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/repair",
      element: <Repair/>,
    },
    {
      path: "/accessories",
      element: <Accessories/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
  
  ]);

  return (
    
    <div className='App'>

  <RouterProvider router={router} />
      
      {/* <Navbar />
      <Background />
      <Aboutpart/> */}
    </div>
  );
}

export default App;
