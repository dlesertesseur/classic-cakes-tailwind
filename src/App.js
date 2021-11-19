import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ContactPage from "./pages/ContactPage.jsx";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="flex flex-row">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contacto" component={ContactPage} />
            <Route exact path="/404" component={ErrorPage} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
export default App;
