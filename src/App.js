import NavBar from './components/navBar';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from './components/itemDetailContainer';
import Foot from "./components/footer";
import Header from "./components/header"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Header/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
      <Route path="/about" element={<h1>Proximamente...</h1>}></Route>
      <Route path="*" element={<h1>NOT FOUND 404</h1>}></Route>
    </Routes>

    </BrowserRouter>
    <Foot/>
    </>
  )
    
  
}

export default App;
