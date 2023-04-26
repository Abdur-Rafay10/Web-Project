
import './App.css';

import Navbar from './Components/Navbar';
import Crauusel from './Components/Crauusel';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Pagination from './Components/Pagination';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import About from './Components/About';
import Cart from './Components/Cart';
import Grocery from './Components/Grocery';
import Electronics from './Components/Electronics';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Makeup from './Components/Makeup';
import Clothes from './Components/Clothes';
import Furniture from './Components/Furniture';
{/*import Sidebar from './Components/Sidebar';*/}

function App() {
  return (
   <>
  


<BrowserRouter>
<Routes>
<Route path='/' element= {<Home/>} />
  <Route path='/ContactUs' element= {<ContactUs/>} />
  <Route path='/Page2' element= {<Page2/>} />
  <Route path='/Page3' element= {<Page3/>} />
  <Route path='/Home' element= {<Home/>} />
  <Route path='/About' element= {<About/>} />
  <Route path='/Cart' element= {<Cart/>} />
  <Route path='/Grocery' element= {<Grocery/>} />
  <Route path='/Electronics' element= {<Electronics/>} />
  <Route path='/Makeup' element= {<Makeup/>} />
  <Route path='/Clothes' element= {<Clothes/>} />
  <Route path='/Furniture' element= {<Furniture/>} />
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
