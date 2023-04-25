
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
      
   
  );
}

export default App;
