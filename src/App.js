import NavBar from './components/navBar';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from './components/itemDetailContainer';
import Foot from "./components/footer";
import Header from "./components/header"

function App() {

  return (
    <>
    <NavBar/>
    <Header/>
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
    <Foot/>
    </>
  )
    
  
}

export default App;
