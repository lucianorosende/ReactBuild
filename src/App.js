import NavBar from './components/navBar';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from './components/itemDetailContainer';
import Error404 from "./animations/e404"
import Foot from "./components/footer";
import Header from "./components/header"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Header/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
      <Route path="/about" element={<Error404/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>

    </BrowserRouter>
    </CartContextProvider>
    <Foot/>
    
    </>
  )
    
  
}

export default App;
