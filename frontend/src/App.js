import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProductPage from "./screens/SingleProductPage";
function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazon
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/product/:id" exact element={<SingleProductPage />} />
          </Routes>
        </main>
        <footer className="row center">ALl right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
