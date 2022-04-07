import NavBar from './components/navBar';
import ItemListContainer from "./components/itemListContainer";
import Foot from "./components/footer";

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Productos"/>
    <Foot/>
    </>
  )
    
  
}

export default App;
