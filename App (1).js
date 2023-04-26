
import './App.css';

import Navbar from './Components/Navbar';
import Crauusel from './Components/Crauusel';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Pagination from './Components/Pagination';
import LogIn from './Components/LogIn';
{/*import Sidebar from './Components/Sidebar';*/}

function App() {
  return (
   <>
  
<Navbar/>

{/*<Sidebar/>*/}<Crauusel/>
<Card/>
<Pagination/>
<Footer/>
<LogIn/>
   </>
  );
}

export default App;
