import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ContactPage from "./pages/ContactPage.jsx";


function App() {
  return (
    <div className="flex-auto">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route path="/category/:id" component={ItemListContainer}/>
          <Route path="/item/:id" component={ItemDetailContainer}/>
          <Route path="/contacto" component={ContactPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
