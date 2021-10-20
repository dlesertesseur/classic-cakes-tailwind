import "./App.css";
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'

function App() {
  return (
    <div className="flex-auto">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}
export default App;
