import "./App.css";
import Header from "./Header/header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Header/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route
            path="/products"
            render={() => (
              <ProductsPage addProduct={addProductHandler} exact />
            )}
          />
          <Route path="/products/:id" component={ProductsPage} />
          <Route path="/Signin" component={Signin} exact />
          <Route path="/register" component={Register} exact /> */}
          </Switch>
          <p>Prashant</p>
        </main>
      </div>
    </Router>
  );
}

export default App;
