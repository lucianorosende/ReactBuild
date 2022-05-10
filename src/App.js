import NavBar from './components/navBar';
import DB from './services/firebase/productdb';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from './components/itemDetailContainer';
import Error404 from "./services/animations/e404"
import Foot from "./components/footer";
import Header from "./components/header"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <DB/>
    <NavBar/>
    <Header/>
    <Routes>
    
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
      <Route path="/about" element={<Error404/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
      
    </Routes>

    </BrowserRouter>
    </CartContextProvider>
    <Foot/>
    
    </>
  )
    
  
}

export default App;
